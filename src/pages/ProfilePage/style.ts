import styled from "styled-components";

export const StyledContainer = styled.div`
    height: calc(100vh - 178px);
`;

export const StyledNavBar = styled.div`
    display: flex;
    align-items: center;
    padding: 0 100px;
    margin-top: 20px;
    gap: 10px;

    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin: 20px 0;
        justify-content: space-between;
        gap: 10px;
    }

    a:link,
    a:visited {
        display: flex;
        align-content: center;
        align-items: center;
    }

    a:hover,
    a:active {
        display: flex;
        align-content: center;
        align-items: center;
    }
`;

export const StyledNavSpan = styled.span`
    font-family: var(--font-family);
    font-size: 1.125rem;
            font-weight: 700;
    color: var(--black);
`;

export const StyledNavSpanGreen = styled.span`
    font-family: var(--font-family);
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--green);
`;

export const StyledMainContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    min-height: 80vh;

    .container {
        width: 95%;
        margin: auto;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 0.625rem;

   

        .form-container {
            width: 100%;
            max-width: 644px;

        }
    }
`;

export const FormInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .div-informationProfile {
        display: flex;
        gap: 10px;
        margin-top: 10px;

        @media (max-width: 532px) {
            display: flex;
            flex-direction: column;
        }
    }
`;

export const StyledTitleProfile = styled.h1`
    font-size: 2.75rem;
    font-weight: 700;
    line-height: 3rem;
    color: var(--black);
`;

export const StyledContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px 100px;
    align-items: center;
    justify-content: center;

    div {
        display: flex;
        justify-content: center;
        align-items: center;

        p {
            font-weight: 700;
    }
        span {
            margin-right: 1rem;
        }
    }
`;

export const StyledWhichName = styled.span`
    font-family: var(--font-family);
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.3125rem;
    color: var(--black);
`;

export const StyledWhichEmail = styled.span`
    font-family: var(--font-family);
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.3125rem;
    color: var(--black);
`;

export const StyledName = styled.span`
    font-family: var(--font-family2);
    font-size: 1rem;
    font-weight: 400;
    color: var(--black);
`;

export const StyledEmail = styled.span`
    font-family: var(--font-family2);
    font-size: 1rem;
    font-weight: 400;
    color: var(--black);
`;
