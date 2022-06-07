import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { SearchPicture } from "../../assets";
import { StyledButton, StyledForm, StyledSearch } from "./style";

export const Search = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data: any) => {
    navigate(`/bookstore/search/${data.title}/1`);
  };
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledSearch type="text" placeholder="Search" {...register("title")} />
      <StyledButton type="submit">
        <SearchPicture />
      </StyledButton>
    </StyledForm>
  );
};
