import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export const MainTemplate = () => {
  return (
    <div>
      <StyledApp>
        <Header />
        <Outlet />
        <Footer />
      </StyledApp>
    </div>
  );
};

const StyledApp = styled.div`
  padding: 0 16px;
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
`;
