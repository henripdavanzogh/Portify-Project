import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
    padding: 10px 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--black);
    align-items: center;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

export const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    gap: 30px;
`;

export const StyledLogo = styled.h1`
    font-size: 25px;
    font-family: "Montserrat";
    font-weight: 700;
    line-height: 40px;
    color: var(--white);
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
