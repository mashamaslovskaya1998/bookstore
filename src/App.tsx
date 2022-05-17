import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { AppRouter } from "./router/AppRouter";
import { IBook } from "./types/books";

const App = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  useEffect(() => {
    fetch("https://api.itbook.store/1.0/new")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.books);
      });
  }, []);
  return (
    <StyledApp>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </StyledApp>
  );
};

export default App;

const StyledApp = styled.div`
  padding: 0 16px;
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
`;
