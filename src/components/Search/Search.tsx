import { ChangeEvent } from "react";
import { StyledSearch } from "./style";
interface IProps {
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  searchValue: string;
}

export const Search = ({ handleSearch, searchValue }: IProps) => {
  return (
    <StyledSearch
      placeholder="search ..."
      onChange={handleSearch}
      value={searchValue}
    />
  );
};
