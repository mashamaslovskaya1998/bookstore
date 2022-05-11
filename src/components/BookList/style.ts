import styled from "styled-components";
const StyledBooksList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fil, minmax(300px, 1fr));
  grid-gap: 20px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  list-style: none;
`;
export { StyledBooksList };
