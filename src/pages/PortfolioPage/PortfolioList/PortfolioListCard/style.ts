import styled from "styled-components";

export const PortfoliosCard = styled.li`
    display: flex;
    flex-direction: row;
    height: 150px;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    div {
        width: 100%;
        display: flex;
        justify-content: space-between;

        @media (max-width: 768px) {
            flex-direction: column;
        }

        img {
            border-radius: 20px;
            width: 242px;
            height: 150px;
        }
    }
`;

export const InformationsContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    height: 100px;

    @media (max-width: 768px) {
        flex-direction: column;
    }

    div:first-child {
        display: flex;
        max-height: 30px;
        flex-direction: column;
        justify-content: center;

        @media (max-width: 768px) {
        }
    }

    div:last-child {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 70px;
        gap: 0.5rem;
        height: 30px;

        a > img {
            width: 25px;
        }
    }
`;

interface IProjectTitleProps {
    color: boolean;
}

export const ProjectTitle = styled.span<IProjectTitleProps>`
    color: ${({ color }) => (color === true ? "var(--black)" : "var(--white)")};
    font-size: 1.75rem;
    font-family: var(--font-family);
    font-style: normal;
    font-weight: 700;
`;

export const ProjectDescription = styled.span<IProjectTitleProps>`
    color: ${({ color }) => (color ? "var(--black)" : "var(--white)")};
    font-size: 1.125rem;
    font-family: var(--font-family);
    font-style: normal;
`;

export const ProjectImage = styled.img`
    width: 100%;
    min-width: 240px;
    max-width: 334px;

    object-fit: contain;
`;
