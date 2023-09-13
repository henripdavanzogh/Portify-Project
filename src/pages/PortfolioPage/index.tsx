import { useContext, useEffect } from "react";
import { StyledTitle1 } from "../../styles/texts";
import { UserContext } from "../../providers/UserContext";
import { useParams } from "react-router-dom";
import { api } from "../../services/api/api";
import { IPortifolioPerPortfolioId } from "../../providers/UserContext/@types";
import { PortfolioList } from "./PortfolioList";
import {
    ContentSection,
    Description,
    FooterText,
    HeaderPortfolio,
    PortfolioFooter,
    PortfolioImage,
    PortfolioMain,
    StartContainer,
    StyledBody,
    StyledRobotoParagraphPortfolio,
    StyledTitleOfList,
    StyledTitlePortfolio,
} from "./style";
import Logo from "../../assets/portify.svg";
import LogoBlack from "../../assets/LogoBlack.svg";

export const PortfolioPage = () => {
    const { id } = useParams();
    const { portfolio, setPortfolio, isLightTheme, setIsLightTheme } =
        useContext(UserContext);

    const loadPortfolio = async () => {
        try {
            const { data } = await api.get<IPortifolioPerPortfolioId>(
                `/portfolios/${id}?_embed=projects&_expand=user`
            );
            setPortfolio(data);

            const color = data.color;

            if (color.length === 5) {
                setIsLightTheme(true);
            } else {
                setIsLightTheme(false);
            }
        } catch (error) {
            console.error(error);
        } finally {
        }
    };

    useEffect(() => {
        loadPortfolio();
    }, []);
    return (
        <StyledBody backgroundcolor={isLightTheme}>
            <HeaderPortfolio backgroundcolor={isLightTheme}>
                <div>
                    <img src={Logo} alt="logo Portify" />
                </div>
            </HeaderPortfolio>
            <PortfolioMain backgroundcolor={isLightTheme}>
                <StartContainer>
                    <div>
                        <StyledTitlePortfolio color={isLightTheme}>
                            {portfolio?.user.name}
                        </StyledTitlePortfolio>
                        <StyledRobotoParagraphPortfolio>
                            {portfolio?.position}
                        </StyledRobotoParagraphPortfolio>
                    </div>
                    <div>
                        <Description color={isLightTheme}>
                            {portfolio?.description}
                        </Description>
                    </div>
                </StartContainer>
                <ContentSection>
                    <StyledTitleOfList color={isLightTheme}>
                        Meus projetos
                    </StyledTitleOfList>
                    {portfolio?.projects!.length ? (
                        <PortfolioList />
                    ) : (
                        <StyledTitle1>
                            Parece que este usuário ainda não cadastrou nenhum
                            projeto!
                        </StyledTitle1>
                    )}
                </ContentSection>
            </PortfolioMain>
            <PortfolioFooter backgroundcolor={isLightTheme}>
                <div>
                    <PortfolioImage src={isLightTheme ? LogoBlack : Logo} />
                    <FooterText color={isLightTheme}>
                        Todos os direitos reservados - Kenzie Academy Brasil{" "}
                    </FooterText>
                </div>
            </PortfolioFooter>
        </StyledBody>
    );
};
