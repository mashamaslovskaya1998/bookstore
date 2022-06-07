// import { useState } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/hooks/hook";
import { getUser } from "../../store/selector/userSelector";
import { setUser, setUserName } from "../../store/slices/userReducer";
import {
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledTitleProfile,
  StyledUser,
  StyledButtonSave,
  StyledLabelContainer,
  StyledButtonContainer,
  Notification,
} from "./style";

export const UserComponent = () => {
  const dispatch = useDispatch();
  const { name, email } = useAppSelector(getUser);
  const { register, handleSubmit } = useForm();
  const [isChange, setIsChange] = useState(false);

  const onSubmit = (data: any) => {
    dispatch(setUser(data.email));
    dispatch(setUserName(data.name));
    setIsChange(true);
  };
  return (
    <div>
      {isChange ? <Notification>Changes saved</Notification> : ""}
      <StyledTitleProfile>Profile</StyledTitleProfile>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledUser>
          <StyledLabelContainer>
            <StyledLabel>Name</StyledLabel>
            <StyledInput placeholder={name} type="name" {...register("name")} />
          </StyledLabelContainer>
          <StyledLabelContainer>
            <StyledLabel>Email</StyledLabel>
            <StyledInput
              placeholder={email}
              type="email"
              {...register("email")}
            />
          </StyledLabelContainer>
        </StyledUser>

        <StyledButtonContainer>
          <StyledButtonSave type="submit">Save changes</StyledButtonSave>
        </StyledButtonContainer>
      </StyledForm>
    </div>
  );
};
