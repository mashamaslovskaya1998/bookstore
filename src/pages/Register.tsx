import { Link, useNavigate } from "react-router-dom";
import { routes } from "../routes/routes";
import { useForm } from "react-hook-form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/userReducer";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        dispatch(setUser(userCredential.user.email));
        navigate(routes.HOME);
      })
      .catch(console.error);
  };
  return (
    <div>
      <h1> Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" {...register("email")} />
        <input type="password" {...register("password")} />
        <button type="submit">Send</button>
      </form>
      <Link to={routes.SIGN_IN}>have account</Link>
    </div>
  );
};

export default Register;
