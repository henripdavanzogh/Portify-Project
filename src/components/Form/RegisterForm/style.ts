import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    @media (max-width: 767px) {
        .inputs {
            display: flex;
            flex-direction: column;
        }
    }

    .inputs {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        width: 100%;

        .input__container-text {
            display: flex;
            flex-direction: column;
            gap: 10px;
            @media (min-width: 768px) {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                gap: 10px;
                width: 100%;
            }
        }
        .input__container-password {
            display: flex;
            flex-direction: column;
            gap: 10px;
            @media (min-width: 768px) {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                gap: 10px;
                width: 100%;
            }
        }
        .message {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 5px;
        }
    }

    .button__container {
        display: flex;
        justify-content: flex-end;
        margin: 10px 0;
    }
`;
