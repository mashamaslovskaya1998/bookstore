import styled from "styled-components";
const StyledBooksList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(352px, 1fr));
  grid-gap: 20px;
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  list-style: none;
`;
export { StyledBooksList };
