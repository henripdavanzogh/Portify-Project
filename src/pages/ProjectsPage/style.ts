import styled from "styled-components";

export const PageContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    height: 100vh;

    .interactions {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 15px;
        padding: 20px 100px;

        a {
            display: flex;
            align-items: center;
        }

        @media (max-width: 768px) {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-direction: column;
        }
    }
`;

export const StyledSpan = styled.span`
    font-size: 18px;
    font-family: var(--font-family);
    font-weight: 700;
    line-height: 25px;
    color: var(--black);
`;

export const StyledNameProject = styled.p`
    font-size: 28px;
    font-family: var(--font-family);
    font-weight: 700;
    line-height: 25px;
    color: var(--black);
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 100%;
`;

export const StyledSection = styled.section`
    max-width: 1500px;
    height: 100%;
    padding: 20px 100px;
`;

export const StyledIntro = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    .projects {
        display: flex;
        flex-direction: column;
        gap: 20px;

        .project {
            display: flex;
            gap: 20px;
            justify-content: space-between;
        }
    }
`;

export const StyledMainHeader = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;

    @media (max-width: 585px) {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .button-add-project {
        display: flex;
        justify-content: center;
    }

    button {
        display: flex;
        align-items: center;
        gap: 10px;
    }
`;

export const StyledButtonSolidMyProjects = styled.button`
    border: 0.0625rem solid var(--green);
    border-radius: 1.5625rem;
    padding: 0.4375rem 1.25rem;
    color: var(--white);
    background: var(--green);
    font-size: 0.9375rem;
    font-family: var(--font-family);
    font-weight: 700;
    margin-top: 10px;
    width: 100%;
    max-width: 220px;
`;

export const StyledTitleDash = styled.h2`
    font-size: 2.75rem;
    font-weight: 700;
    line-height: 3.3125rem;
    color: var(--black);
`;

export const StyledNavDash = styled.nav`
    display: flex;
    align-items: center;
    gap: 30px;

    p {
        color: var(--white);
    }
`;
