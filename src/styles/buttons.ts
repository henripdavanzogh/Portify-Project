import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledButtonOutline = styled.button`
    color: var(--green);
    background: var(--white);
    border: 0.0625rem solid var(--green);
    border-radius: 1.5625rem;
    padding: 0.4375rem 1.25rem;
    font-size: 0.9375rem;
    font-family: var(--font-family);
    font-weight: 700;
    &:hover {
        color: var(--white);
        background: var(--green);
    }
`;

export const StyledButtonBlackOutline = styled.button`
    color: var(--green);
    background: var(--black);
    border: 0.0625rem solid var(--green);
    border-radius: 1.5625rem;
    padding: 0.4375rem 1.25rem;
    font-size: 0.9375rem;
    font-family: var(--font-family);
    font-weight: 700;
    &:hover {
        color: var(--white);
        background: var(--green);
    }
`;

export const StyledButtonSolid = styled.button`
    border: 0.0625rem solid var(--green);
    border-radius: 1.5625rem;
    padding: 0.4375rem 1.25rem;
    color: var(--white);
    background: var(--green);
    font-size: 0.9375rem;
    font-family: var(--font-family);
    font-weight: 700;
    margin-top: 10px;
`;

export const StyledLinkSolidHeader = styled(Link)`
    text-align: center;
    text-decoration: none;
    border: 0.0625rem solid var(--green);
    border-radius: 1.5625rem;
    color: var(--white);
    background: var(--green);
    font-size: 0.9375rem;
    font-family: var(--font-family);
    font-weight: 700;
    padding: 0.4375rem 1.25rem;
`;

export const StyledLinkSolid = styled(Link)`
    text-align: center;
    text-decoration: none;
    border: 0.0625rem solid var(--green);
    border-radius: 1.5625rem;
    color: var(--white);
    background: var(--green);
    font-size: 0.9375rem;
    font-family: var(--font-family);
    font-weight: 700;
    width: 100%;
    max-width: 37.5rem;
    padding: 0.4375rem 1.25rem;
    &:focus {
        box-shadow: 0px 0px 0.5625rem -0.1875rem rgba(46, 171, 146, 1);
    }

    @media (min-width: 768px) {
        width: 11.625rem;
        padding: 0.4375rem 1.25rem;
    }
`;

export const StyledLinkAccess = styled(Link)`
    text-align: center;
    text-decoration: none;
    color: var(--green);
    background: var(--white);
    border: 0.0625rem solid var(--green);
    border-radius: 1.5625rem;
    width: 100%;
    max-width: 600px;
    padding: 0.4375rem 1.25rem;
    font-size: 0.9375rem;
    font-family: var(--font-family);
    font-weight: 700;
    &:focus {
        box-shadow: 0px 0px 9px -3px rgba(46, 171, 146, 1);
    }
    @media (min-width: 768px) {
        width: 15.0625rem;
        padding: 0.4375rem 1.25rem;
    }
`;

export const StyledLinkOutline = styled(Link)`
    text-align: center;
    text-decoration: none;
    color: var(--green);
    background: var(--white);
    border: 0.0625rem solid var(--green);
    border-radius: 1.5625rem;
    padding: 0.4375rem 1.25rem;
    font-size: 0.9375rem;
    font-family: var(--font-family);
    font-weight: 700;
    &:focus {
        box-shadow: 0px 0px 0.5625rem -0.1875rem rgba(46, 171, 146, 1);
    }
`;

export const StyledLinkBlack = styled(Link)`
    text-decoration: none;
    color: var(--black);
    font-size: 0.9375rem;
    font-family: var(--font-family);
    font-weight: 700;
`;

export const StyledLinkGreen = styled(Link)`
    text-decoration: none;
    color: var(--green);
    font-size: 0.9375rem;
    font-family: var(--font-family);
    font-weight: 700;
`;
