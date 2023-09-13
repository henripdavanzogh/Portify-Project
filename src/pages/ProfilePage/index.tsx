import homeBtn from "../../assets/homeButtonImg.svg";
import personBtn from "../../assets/personButtonImg.svg";
import projectsBtn from "../../assets/projectsButtonimg.svg";
import { Footer } from "../../components/Footer";
import { UserContext } from "../../providers/UserContext";
import { PortfolioContext } from "../../providers/PortfolioContext";
import { useContext } from "react";
import { UpdatePortfolioForm } from "./UpdatePortfolioForm";
import { CreatePortfolioForm } from "./CreatePortfolioForm";

import {
    FormInfo,
    StyledEmail,
    StyledMainContainer,
    StyledName,
    StyledNavBar,
    StyledNavSpan,
    StyledNavSpanGreen,
    StyledTitleProfile,
    StyledWhichEmail,
    StyledWhichName,
} from "./style";
import { PrivateHeader } from "../../components/Header/PrivateRoutesHeader";
import { StyledLinkBlack, StyledLinkGreen } from "../../styles/buttons";

export const ProfilePage = () => {
    const { user } = useContext(UserContext);

    const { portId } = useContext(PortfolioContext);
    return (
        <>
            <PrivateHeader />
            <StyledNavBar>
                <StyledLinkBlack to="/dashboard">
                    <img
                        src={homeBtn}
                        alt="Botão no formato de casa que leva para o início da Dashboard"
                    />
                    <StyledNavSpan>início</StyledNavSpan>
                </StyledLinkBlack>
                <StyledLinkGreen to="/profile">
                    <img
                        src={personBtn}
                        alt="Botão no formato de uma pessoa que leva para informações do perfil"
                    />
                    <StyledNavSpanGreen>
                        informações de perfil
                    </StyledNavSpanGreen>
                </StyledLinkGreen>
                <StyledLinkBlack to="/projects">
                    <img
                        src={projectsBtn}
                        alt="Botão no formato de pastas que leva para meus projetos"
                    />
                    <StyledNavSpan>meus projetos</StyledNavSpan>
                </StyledLinkBlack>
            </StyledNavBar>
            <StyledMainContainer>
                <div className="container">
                    <FormInfo>
                        <StyledTitleProfile>
                            Informações no perfil:
                        </StyledTitleProfile>
                        <div className="div-informationProfile">
                            <div className="name-container">
                                <StyledWhichName>Nome: </StyledWhichName>
                                <StyledName>{user?.name}</StyledName>
                            </div>
                            <div className="email-container">
                                <StyledWhichEmail>Email: </StyledWhichEmail>
                                <StyledEmail>{user?.email}</StyledEmail>
                            </div>
                        </div>
                    </FormInfo>
                    <div className="form-container">
                        {portId ? (
                            <UpdatePortfolioForm />
                        ) : (
                            <CreatePortfolioForm />
                        )}
                    </div>
                </div>
            </StyledMainContainer>

            <Footer />
        </>
    );
};
