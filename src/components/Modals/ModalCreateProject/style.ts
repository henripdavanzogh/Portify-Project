import styled from "styled-components";

export const StyledModal = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    inset: 0;
    background: rgba(17, 188, 199, 0.2);
`;

export const StyledCreateProject = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    max-width: 648px;
    background: var(--white);
    padding: 30px;
    gap: 10px;
    border-radius: 5px;

    .modal-header {
        display: flex;
        justify-content: space-between;
        width: 100%;

        .button {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .div-inputModal {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 90%;
        gap: 8px;
    }

    .button-container {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
`;
