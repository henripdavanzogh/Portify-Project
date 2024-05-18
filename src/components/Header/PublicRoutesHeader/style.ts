import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100vw;
  padding: 15px 0;
  display: flex;
  justify-content: center;
  background-color: var(--black);

  section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
  }

  @media (min-width: 768px) {
    section {
      width: 80%;
      flex-direction: row;
    }
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const StyledLogo = styled(Link)`
  font-size: 25px;
  font-family: "Montserrat";
  font-weight: 700;
  line-height: 40px;
  color: var(--white);
  cursor: pointer;
  text-decoration: none;
`;

export const StyledLink = styled(Link)`
  display: none;

  @media (min-width: 768px) {
    display: inline;
    font-size: 15px;
    font-family: "Montserrat";
    font-weight: 700;
    color: var(--white);
    text-decoration: none;
  }
`;
