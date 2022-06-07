import styled from "styled-components";

export const StyledBooksList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 32px;
  max-width: 1120px;
  width: 100%;
  margin: 0 auto 72px auto;
  padding: 0;
  list-style: none;
  padding-bottom: 73px;
  border-bottom: 1px rgb(231, 231, 231) solid;
`;
