import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
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
  StyledLink,
  StyledPasswordInput,
  StyledSignIn,
  StyledText,
  StyledTitle,
} from "./style";

export const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        dispatch(setUser(userCredential.user.email));
        navigate(routes.NEWBOOK);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <StyledContainer>
      <StyledSignIn>
        <StyledTitle>Sign In</StyledTitle>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
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
            <StyledPasswordInput
              placeholder="Your password"
              type="password"
              {...register("password")}
            />
          </label>
          <StyledText>Forgot password?</StyledText>
          <StyledButton type="submit">Sign in</StyledButton>
          <StyledLink to={routes.SIGN_UP}>Create account</StyledLink>
        </StyledForm>
      </StyledSignIn>
    </StyledContainer>
  );
};
