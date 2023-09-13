import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 1.25rem;

    button {
        align-self: flex-end;
        margin-top: 10px;
    }

    @media (min-width: 768px) {
        max-width: 644px;
    } 
`;
