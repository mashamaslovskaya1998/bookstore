import { useSelector } from "react-redux";
import { RootStore } from "../store/store";

export const Home = () => {
  const { isAuth, email } = useSelector(({ user }: RootStore) => user);

  if (isAuth) {
    return <div>{email}</div>;
  }
  return;
};
