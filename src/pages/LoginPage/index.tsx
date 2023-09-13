import {
  StyleInternal,
  StyledBanner,
  StyledMain,
  StyledTextWrapper,
} from "./style";
import BannerLogin from "../../assets/bannerLogin.svg";
import { StyledRobotoParagraph, StyledTitle1 } from "../../styles/texts";
import { LoginForm } from "../../components/Form/LoginForm";

import { Header } from "../../components/Header/PublicRoutesHeader/index";
import { Footer } from "../../components/Footer/index";
export const LoginPage = () => {
  return (
    <>
      <Header />
      <StyleInternal> 
        <StyledMain>
          <StyledBanner
            src={BannerLogin}
            alt="Homem de óculos segurando um tablet olhando fixamente para a tela e pensativo."
          />
          <StyledTextWrapper>
            <StyledTitle1>Login</StyledTitle1>
            <StyledRobotoParagraph>Acesse o portfolio</StyledRobotoParagraph>
            <LoginForm />
          </StyledTextWrapper>
        </StyledMain>
      </StyleInternal> 
      <Footer />
    </>
  );

};
