import styled from "styled-components";

export const PortfolioProjectsList = styled.ul`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 1rem;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;
