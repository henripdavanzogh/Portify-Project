import styled from "styled-components";


export const StyleInternalDashboard = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    height: 100vh;

    .section-dashboard {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
    }
`

export const StyledWelcomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 20px 100px;

    @media (max-width: 580px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        padding: 20px 20%;
    }
    
        span {
            color: var(--green);
        }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 100px;

    @media (max-width: 580px) {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 0 20%;
    }

    a {
        display: flex;
        align-content: center;
        align-items: center;
        text-decoration: none;
        span {
            font-family: "Montserrat";
            font-weight: 700;
        }
    }

    @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
        justify-content: start;
        gap: 15px;
    }
`;

export const StyledHeaderContainer = styled.div`
    align-self: flex-start;
`;

export const StyledContentContainer = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: max-content;

    div {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 2rem;
        @media (max-width: 580px) {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2rem;
        }
    }
`;

export const StyledRobotoParagraphDash = styled.p`
    font-size: 1rem;
    font-family: "Roboto";
    font-weight: 400;
    line-height: 1.125rem;
    color: var(--black-1);
    margin-top: 10px;
`;
