import { Footer } from "../../components/Footer/index";
import { Header } from "../../components/Header/PublicRoutesHeader/index";
import {
    StyleInternal,
    StyledBanner,
    StyledButtonsWrapper,
    StyledLogoGreen,
    StyledMain,
    StyledTextWrapper,
} from "./style";
import banner from "../../assets/bannerHome.svg";
import { StyledRobotoParagraph, StyledTitle1 } from "../../styles/texts";
import { StyledLinkAccess, StyledLinkSolid } from "../../styles/buttons";
import logo from "../../assets/portify.svg";

export const HomePage = () => {
    return (
        <>
            <Header />
            <StyleInternal>
                <StyledMain>
                    <StyledBanner
                        src={banner}
                        alt="Jovem segurando um tablet"
                    />
                    <StyledTextWrapper>
                        <div>
                            <StyledLogoGreen src={logo}></StyledLogoGreen>
                            <StyledTitle1>
                                Crie seu portfólio online
                            </StyledTitle1>
                        </div>
                        <StyledRobotoParagraph>
                            Crie um portfólio para você em minutos
                        </StyledRobotoParagraph>
                        <StyledButtonsWrapper>
                            <StyledLinkSolid to="/register">
                                cadastre-se
                            </StyledLinkSolid>
                            <StyledRobotoParagraph>ou</StyledRobotoParagraph>
                            <StyledLinkAccess to="/login">
                                acesse seu portfólio
                            </StyledLinkAccess>
                        </StyledButtonsWrapper>
                    </StyledTextWrapper>
                </StyledMain>
            </StyleInternal>
            <Footer />
        </>
    );
};
