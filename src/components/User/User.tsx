// import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/hooks/hook";
import { getUser } from "../../store/selector/userReducer";
import { setUser, setUserName } from "../../store/slices/userReducer";
import {
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledPasswordInput,
  StyledTitleProfile,
  StyledTitlePassword,
  StyledUser,
  StyledUserButton,
  StyledButtonSave,
  StyledButtonCancel,
} from "./style";

export const UserComponent = () => {
  const dispatch = useDispatch();
  const { name, email } = useAppSelector(getUser);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    dispatch(setUser(data.email));
    dispatch(setUserName(data.name));
  };
  return (
    <div>
      <StyledTitleProfile>Profile</StyledTitleProfile>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledUser>
          <label>
            <StyledLabel>Name</StyledLabel>
            <StyledInput placeholder={name} type="name" {...register("name")} />
          </label>
          <label>
            <StyledLabel>Email</StyledLabel>
            <StyledInput
              placeholder={email}
              type="email"
              {...register("email")}
            />
          </label>
        </StyledUser>
        <StyledTitlePassword>Password</StyledTitlePassword>
        <StyledUser>
          <label>
            <StyledLabel>Password</StyledLabel>
            <StyledInput
              placeholder="Your password"
              type="password"
              {...register("password")}
            />
          </label>
          <div></div>
          <label>
            <StyledLabel>New password</StyledLabel>
            <StyledPasswordInput
              placeholder="New password"
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
        </StyledUser>
        <StyledUserButton>
          <StyledButtonSave type="submit">Save changes</StyledButtonSave>

          <StyledButtonCancel>Cancel</StyledButtonCancel>
        </StyledUserButton>
      </StyledForm>
    </div>
  );
};
