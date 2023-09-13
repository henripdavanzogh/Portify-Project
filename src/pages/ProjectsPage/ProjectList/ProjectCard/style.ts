import styled from "styled-components";

export const StyledLi = styled.li`
    display: flex;
    gap: 10px;
    justify-content: space-between;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }

    .main-content {
        display: flex;
        gap: 15px;

        @media (max-width: 600px) {
            display: flex;
            flex-direction: column;
        }

        .image {
            @media (max-width: 600px) {
                display: flex;
                justify-content: center;
            }
        }

        .project-info {
            width: 90%;
        }
    }
`;

export const EditDelete = styled.div`
    display: flex;
    gap: 10px;
    align-items: flex-start;
    height: max-content;

    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const Image = styled.img`
    object-fit: contain;

    min-width: 100px;
    width: 100%;
    max-width: 300px;

    border-radius: 10px;
`;
