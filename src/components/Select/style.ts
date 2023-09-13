import styled from "styled-components";

export const StyledSelect = styled.select`
    border: var(--green) 1px solid;
    border-radius: 8px;
    padding: 10px 16px;

    font-size: 1rem;
    font-family: "Roboto";
    font-weight: 400;

    height: 50px;
    width: 100%;

    ::placeholder {
        color: #00000050;
    }
    @media (min-width: 768px) {
        width: 100%;
    }
`;

export const StyledLabel = styled.label`
    font-size: 1.3125rem;
    font-weight: 700;
    line-height: 1.5625rem;
    color: var(--green);
`;
