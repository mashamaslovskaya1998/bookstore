import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export const Home = () => {
  const { isAuth, email } = useSelector(({ user }: RootState) => user);

  if (isAuth) {
    return <div>{email}</div>;
  }
  return;
};
