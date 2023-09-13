import styled from "styled-components";

export const StyledFooterLogo = styled.h1`
    font-size: 25px;
    font-family: "Montserrat";
    font-weight: 700;
    line-height: 40px;
    color: var(--black);
`;

export const StyledFooter = styled.footer`
    height: 194px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--grey);

    section {
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;
    }

    p {
        text-align: center;
    }

    @media (min-width: 768px) {
        height: 108px;

        section {
            justify-content: space-between;
            flex-direction: row;
        }
    }
`;
