import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

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
} from "./style";

export const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        dispatch(setUser(userCredential.user.email));
        navigate(routes.NEWBOOK);
      })
      .catch(console.error);
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
          <StyledButton type="submit">Sign in</StyledButton>
        </StyledForm>
      </StyledSignUp>
    </StyledContainer>
  );
};
