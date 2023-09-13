import styled from "styled-components";

export const StyledTitle1 = styled.h1`
    font-size: 2.75rem;
    font-weight: 700;
    line-height: 3rem;
    color: var(--black);

    @media (min-width: 768px) {
        font-size: 4rem;
        line-height: 4.875rem;
    }
`;
export const StyledTitle2 = styled.h2`
    font-size: 2.75rem;
    font-weight: 700;
    line-height: 3.3125rem;
    color: var(--black);
`;
export const StyledMontserratParagraph = styled.p`
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 2.25rem;
    color: var(--black);
`;

export const StyledRobotoParagraph = styled.p`
    font-size: 1rem;
    font-family: "Roboto";
    font-weight: 400;
    line-height: 1.125rem;
    color: var(--black-1);
`;

export const StyledFooterParagraph = styled.p`
    font-size: 1rem;
    font-family: "Roboto";
    font-weight: 400;
    line-height: 1.125rem;
    color: var(--grey-1);
`;

export const StyledLabel = styled.p`
    font-size: 1.3125rem;
    font-weight: 700;
    line-height: 1.5625rem;
    color: var(--green);
`;

export const StyledLabelMobile = styled.p`
    font-size: 1.1875rem;
    font-weight: 700;
    line-height: 1.4375rem;
    color: var(--green);
`;
