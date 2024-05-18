import styled from "styled-components";

export const StyleInternal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  gap: 50px;

  @media (min-width: 768px) {
    flex-direction: row;
    width: 60%;
    height: calc(100vh - 11.125rem);
  }
`;

export const StyledBanner = styled.img`
  width: 90%;
  min-height: 10%;
  max-height: 100%;
  max-width: 490px;
  padding: 15px;

  @media (min-width: 768px) {
    width: 40%;
    max-width: 500px;
  }
`;

export const StyledTextWrapper = styled.div`
  padding-top: 35px;

  width: 90%;
  max-width: 520px;
  height: 100%;
  min-height: 50%;

  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 768px) {
    width: 50%;
    width: 518px;
  }
`;

export const StyledLogoGreen = styled.img`
  width: 62px;

  @media (min-width: 768px) {
    width: 86px;
  }
`;

export const StyledButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  width: 90%;
  max-width: 550px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
