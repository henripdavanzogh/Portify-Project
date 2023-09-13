import { StyledLinkSolidHeader } from "../../../styles/buttons";
import { StyledHeader, StyledLink, StyledLogo, StyledNav } from "./style";

export const Header = () => {
    return (
        <StyledHeader>
            <section>
                <StyledLogo>portify</StyledLogo>
                <StyledNav>
                    <StyledLink to="/register">cadastre-se</StyledLink>
                    <StyledLinkSolidHeader to="/login">
                        acesse seu portfólio
                    </StyledLinkSolidHeader>
                </StyledNav>
            </section>
        </StyledHeader>
    );
};
