import styled from "styled-components";

export const StyleModal = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    inset: 0;
    background: rgba(17, 188, 199, 0.2);
    
`;

export const StyledEditProject = styled.form`
    display: flex;
    gap: 10px;
    padding: 30px 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    max-width: 648px;
    background: var(--white);
    border-radius: 5px;

    .div-headerModal {
        display: flex;
        justify-content: space-between;
        width: 90%;

        .close {
            display: flex;
            justify-content: center;
        }
    }

    .div-inputModal {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 90%;
        gap: 10px;
    }

    .button-container {
        width: 90%;
        margin: auto;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
`;

export const StyledButton = styled.button`
    font-size: 1.75rem;
    font-family: var(--font-family);
    font-weight: 400;
    color: #0005;
`;
