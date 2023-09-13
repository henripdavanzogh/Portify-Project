import { PrivateHeader } from "../../components/Header/PrivateRoutesHeader/index";
import homeBtn from "../../assets/homeButtonImg.svg";
import personBtn from "../../assets/personButtonImg.svg";
import projectsBtn from "../../assets/projectsButtonimg.svg";
import plusSign from "../../assets/plusSign.svg";
import {
    Main,
    PageContainer,
    StyledButtonSolidMyProjects,
    StyledIntro,
    StyledMainHeader,
    StyledSection,
    StyledTitleDash,
} from "./style";
import { StyledLinkBlack, StyledLinkGreen } from "../../styles/buttons";
import { Footer } from "../../components/Footer";
import { ProjectList } from "./ProjectList";
import { useContext } from "react";
import { PortfolioContext } from "../../providers/PortfolioContext";
import { ModalCreateProject } from "../../components/Modals/ModalCreateProject";
import { ModalEditProject } from "../../components/Modals/ModalEditProject/index";
import { StyledNavSpan, StyledNavSpanGreen } from "../ProfilePage/style";

export const ProjectPage = () => {
    const {
        listProject,
        isAddProjectModalOpen,
        isEditModalOpen,
        setIsAddProjectModalOpen,
    } = useContext(PortfolioContext);

    return (
        <>
            {isAddProjectModalOpen && <ModalCreateProject />}
            {isEditModalOpen && <ModalEditProject />}
            <PageContainer>
                <div>
                    <PrivateHeader />
                    <div className="interactions">
                        <StyledLinkBlack to="/dashboard">
                            <img
                                src={homeBtn}
                                alt="Botão no formato de casa que leva para o início da Dashboard"
                            />
                            <StyledNavSpan>início</StyledNavSpan>
                        </StyledLinkBlack>
                        <StyledLinkBlack to="/profile">
                            <img
                                src={personBtn}
                                alt="Botão no formato de uma pessoa que leva para informações do perfil"
                            />
                            <StyledNavSpan>informações de perfil</StyledNavSpan>
                        </StyledLinkBlack>
                        <StyledLinkGreen to="/projects">
                            <img
                                src={projectsBtn}
                                alt="Botão no formato de pastas que leva para meus projetos"
                            />
                            <StyledNavSpanGreen>
                                meus projetos
                            </StyledNavSpanGreen>
                        </StyledLinkGreen>
                    </div>
                </div>
                <Main>
                    <StyledSection>
                        <StyledIntro>
                            <StyledMainHeader>
                                <StyledTitleDash>Meus projetos</StyledTitleDash>
                                <div className="button-add-project">
                                    <StyledButtonSolidMyProjects
                                        onClick={() =>
                                            setIsAddProjectModalOpen(true)
                                        }
                                    >
                                        <img
                                            src={plusSign}
                                            alt="Sinal de adicionar projetos"
                                        />
                                        Adicionar Projeto
                                    </StyledButtonSolidMyProjects>
                                </div>
                            </StyledMainHeader>
                            <div className="projects-container">
                                {listProject!.length > 0 ? (
                                    <ProjectList />
                                ) : (
                                    <h1>
                                        Parece que voce ainda não adicionou
                                        nenhum projeto. Que tal cadastrar um
                                        clicando no botao azul?
                                    </h1>
                                )}
                            </div>
                        </StyledIntro>
                    </StyledSection>
                </Main>
                <Footer />
            </PageContainer>
        </>
    );
};
