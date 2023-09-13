import styled from "styled-components";

interface IStyledBody {
    backgroundcolor: boolean;
}

export const StyledBody = styled.div<IStyledBody>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100vw;
    height: 100vh;
    background-color: ${({ backgroundcolor }) =>
        backgroundcolor === true ? "var(--white)" : "var(--black)"};
`;

interface IHeaderProps {
    backgroundcolor: boolean;
}

export const HeaderPortfolio = styled.header<IHeaderProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    padding: 2rem 0rem;
    margin-bottom: 2rem;

    background-color: ${({ backgroundcolor }) =>
        backgroundcolor === true ? "var(--white)" : "var(--black)"};

    div {
        display: flex;
        justify-content: center;

        max-width: 1200px;
    }
`;

export const PortfolioMain = styled.main<IHeaderProps>`
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 100%;
    padding: 2rem;
    margin-bottom: 1.875rem;
    background-color: ${({ backgroundcolor }) =>
        backgroundcolor === true ? "var(--white)" : "var(--black)"};
`;

export const StartContainer = styled.section`
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1200px;
    gap: 1rem;
    margin: 0 auto;
    padding: 1rem;
    align-self: flex-start;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    div:first-child {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;
        max-width: 400px;
        @media (max-width: 768px) {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }

    div:last-child {
        width: 100%;
        max-width: 600px;
        @media (max-width: 768px) {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
`;

interface IDescriptionProps {
    color: boolean;
}

export const Description = styled.p<IDescriptionProps>`
    font-size: 1.125rem;
    color: ${({ color }) => (color ? "var(--black)" : "var(--white)")};

    @media (max-width: 768px) {
        text-align: center;
    }
`;

export const StyledRobotoParagraphPortfolio = styled.p`
    font-size: 1.3125rem;
    font-family: var(--font-family);
    font-weight: 700;
    line-height: 1.125rem;
    color: var(--green);
`;

export const ContentSection = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
    gap: 1rem;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const PortfolioFooter = styled.footer<IHeaderProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 110px;
    background-color: ${({ backgroundcolor }) =>
        backgroundcolor === true ? "#F5F5F5" : "var(--black)"};
    padding: 0 2rem;

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        gap: 1rem;

        @media (max-width: 768px) {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
`;

export const PortfolioImage = styled.img`
    width: 87px;
    height: 25px;
`;

export const FooterText = styled.span<IDescriptionProps>`
    color: ${({ color }) => (color ? "var(--black)" : "var(--white)")};
    font-size: 1rem;
    font-family: var(--font-family2);
    font-weight: 400;
`;

export const StyledTitleOfList = styled.h1<IDescriptionProps>`
    font-size: 2.75rem;
    font-weight: 700;
    line-height: 3rem;
    color: ${({ color }) => (color ? "var(--black)" : "var(--white)")};
    margin-bottom: 5rem;

    @media (min-width: 768px) {
        font-size: 4rem;
        line-height: 4.875rem;
    }
`;

export const StyledTitlePortfolio = styled.h1<IDescriptionProps>`
    font-size: 4rem;
    font-weight: 700;
    color: ${({ color }) => (color ? "var(--black)" : "var(--white)")};
    margin-bottom: 5rem;
`;
