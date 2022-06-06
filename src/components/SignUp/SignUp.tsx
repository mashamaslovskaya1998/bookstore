import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes/routes";
import { setUser } from "../../store/slices/userReducer";
import {
  StyledButton,
  StyledContainer,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledPasswordInput,
  StyledSignUp,
  StyledTitle,
  Notification,
  ErrorMessage,
} from "./style";

export const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [isSignUpError, setIsSignUpError] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const onSubmit = (data: any) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        dispatch(setUser(userCredential.user.email));
        navigate(routes.NEWBOOK);
        setIsSignUp(true);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setIsSignUpError(true);
      });
  };

  return (
    <StyledContainer>
      <StyledSignUp>
        <StyledTitle>Sign Up</StyledTitle>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <label>
            <StyledLabel>Name</StyledLabel>
            <StyledInput
              placeholder="Your name"
              type="name"
              {...register("name")}
            />
          </label>
          <label>
            <StyledLabel>Email</StyledLabel>
            <StyledInput
              placeholder="Your email"
              type="email"
              {...register("email")}
            />
          </label>
          <label>
            <StyledLabel>Password</StyledLabel>
            <StyledInput
              placeholder="Your password"
              type="password"
              {...register("password")}
            />
          </label>
          <label>
            <StyledLabel>Confirm password</StyledLabel>
            <StyledPasswordInput
              placeholder="Confirm password"
              type="password"
              {...register("password")}
            />
          </label>

          {isSignUpError ? (
            <ErrorMessage>Please, fill in all the fields.</ErrorMessage>
          ) : (
            ""
          )}
          <StyledButton type="submit">Sign up</StyledButton>
        </StyledForm>
      </StyledSignUp>
    </StyledContainer>
  );
};
