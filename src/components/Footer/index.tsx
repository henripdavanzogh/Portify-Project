import { StyledFooterParagraph } from "../../styles/texts";
import { StyledFooterLogo, StyledFooter } from "./style";

export const Footer = () => {
    return (
        <StyledFooter>
            <section>
                <StyledFooterLogo>portify</StyledFooterLogo>
                <StyledFooterParagraph>
                    Todos os direitos reservados - Kenzie Academy Brasil
                </StyledFooterParagraph>
            </section>
        </StyledFooter>
    );
};
