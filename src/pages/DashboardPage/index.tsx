import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import {
    StyledRobotoParagraph,
    StyledTitle1,
    StyledTitle2,
} from "../../styles/texts";
import {
    ButtonsContainer,
    StyleInternalDashboard,
    StyledContentContainer,
    StyledHeaderContainer,
    StyledRobotoParagraphDash,
    StyledWelcomeContainer,
} from "./style";
import { PrivateHeader } from "../../components/Header/PrivateRoutesHeader/index";
import { Footer } from "../../components/Footer";
import homeBtn from "../../assets/homeButtonImg.svg";
import personBtn from "../../assets/personButtonImg.svg";
import projectsBtn from "../../assets/projectsButtonimg.svg";
import {
    StyledLinkBlack,
    StyledLinkGreen,
    StyledLinkSolid,
} from "../../styles/buttons";
import { PortfolioContext } from "../../providers/PortfolioContext";
import { StyledNavSpan, StyledNavSpanGreen } from "../ProfilePage/style";

export const DashboardPage = () => {
    const { user } = useContext(UserContext);
    const { portId } = useContext(PortfolioContext);

    return (
        <StyleInternalDashboard>
            <PrivateHeader />
            <section className="section-dashboard">
                <div>
                    <StyledWelcomeContainer>
                        <StyledHeaderContainer>
                            <StyledTitle1>
                                Seja bem vindo: <span>{user?.name}</span>
                            </StyledTitle1>
                            <StyledRobotoParagraphDash>
                                Selecione uma das opções abaixo
                            </StyledRobotoParagraphDash>
                        </StyledHeaderContainer>
                    </StyledWelcomeContainer>

                    <ButtonsContainer className="buttonsContainer">
                        <StyledLinkGreen to="/dashboard">
                            <img
                                src={homeBtn}
                                alt="Botão no formato de casa que leva para o início da Dashboard"
                            />
                            <StyledNavSpanGreen>início</StyledNavSpanGreen>
                        </StyledLinkGreen>
                        <StyledLinkBlack to="/profile">
                            <img
                                src={personBtn}
                                alt="Botão no formato de uma pessoa que leva para informações do perfil"
                            />
                            <StyledNavSpan>informações de perfil</StyledNavSpan>
                        </StyledLinkBlack>
                        <StyledLinkBlack to="/projects">
                            <img
                                src={projectsBtn}
                                alt="Botão no formato de pastas que leva para meus projetos"
                            />
                            <StyledNavSpan>meus projetos</StyledNavSpan>
                        </StyledLinkBlack>
                    </ButtonsContainer>
                </div>
                <StyledContentContainer>
                    <div>
                        {portId ? (
                            <div>
                                <StyledTitle2>
                                    Seu portfólio está online
                                </StyledTitle2>
                                <StyledRobotoParagraph>
                                    Acesse em
                                </StyledRobotoParagraph>
                                <StyledLinkGreen
                                    target="_blank"
                                    to={`/portfolio/${portId}`}
                                >
                                    www.portify.com.br/portfolio/{portId}
                                </StyledLinkGreen>
                            </div>
                        ) : (
                            <div>
                                <StyledRobotoParagraph>
                                    Seu portfolio ainda não está publicado
                                </StyledRobotoParagraph>
                                <StyledLinkSolid to="/profile">
                                    Publicar Portfólio
                                </StyledLinkSolid>
                            </div>
                        )}
                    </div>    
                </StyledContentContainer>
                <div></div>
                </section>
            <Footer />
        </StyleInternalDashboard>
    );
};
