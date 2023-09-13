import { RegisterForm } from "../../components/Form/RegisterForm";
import Arrow from "../../assets/goBackArrow.svg";
import { Header } from "../../components/Header/PublicRoutesHeader/index";
import { Footer } from "../../components/Footer";
import { Container, DivBackToLogin, Main, Section } from "./style";
import {
    StyledLabelMobile,
    StyledRobotoParagraph,
    StyledTitle1,
} from "../../styles/texts";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
    return (
        <>
            <Header />
            <Main className="container">
                <Section className="section">
                    <Container>
                        <DivBackToLogin>
                            <Link to="/login">
                                <img
                                    src={Arrow}
                                    alt="Botão de voltar para a página de login"
                                />
                                <StyledLabelMobile>voltar</StyledLabelMobile>
                            </Link>
                        </DivBackToLogin>

                        <StyledTitle1>Cadastre-se</StyledTitle1>
                        <StyledRobotoParagraph>
                            Preencha os campos abaixo para criar uma conta
                        </StyledRobotoParagraph>
                        <RegisterForm />
                    </Container>
                </Section>
            </Main>
            <Footer />
        </>
    );
};
