import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Title } from "../components/Title/Title";
import { routes } from "../routes/routes";
import { RootState } from "../store/store";
import { UserComponent } from "../components/User/User";
import { BackButton } from "../components/BackButton/BackButton";

export const User = () => {
  const { isAuth } = useSelector(({ user }: RootState) => user);

  if (isAuth) {
    return (
      <div>
        <BackButton />
        <Title>Account</Title>
        <UserComponent />
      </div>
    );
  }
  return (
    <div>
      <Navigate to={routes.SIGN_IN} />;
    </div>
  );
};
