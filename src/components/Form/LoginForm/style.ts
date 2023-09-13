import styled from "styled-components";

export const StyledLoginForm = styled.form`
    width: 95%;
    max-width: 32.375rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;

    .enterButton {
        width: 100%;
    }

    .registerButton {
        width: 100%;
    }

    @media (min-width: 768px) {
        width: 100%;

        .enterButton {
            max-width: 100px;
        }

        .registerButton {
            width: 140px;
        }
    }
`;

export const StyledPasswordField = styled.div`
    width: 100%;
    max-height: 2.35rem;

    gap: 1rem;
    position: relative;

    img {
        cursor: pointer;
        position: absolute;
        width: 20px;
        top: 15px;
        right: 18px;
    }
`;
