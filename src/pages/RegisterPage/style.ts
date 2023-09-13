import styled from "styled-components";

export const Main = styled.main`
  height: calc(100vh - 11.125rem);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Section = styled.section`
  width: max-content;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 10px;

  @media (max-width: 430px) {
    width: 90%;
    margin: auto;
  }
  @media (min-width: 767px) {
    width: 90%;
    margin: auto;
    max-width: 1057px;
  }
`;

export const DivBackToLogin = styled.div`
  a {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 15px;
    text-decoration: none;
  }

  img:hover {
    cursor: pointer;
  }
`;
