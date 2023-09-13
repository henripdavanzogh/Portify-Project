import { StyledLinkSolid } from "../../styles/buttons";
import { StyledHeader, StyledLink, StyledLogo, StyledNav } from "./style";

export const Header = () => {
    return (
        <StyledHeader>
            <StyledLogo>portify</StyledLogo>
            <StyledNav>
                <StyledLink to="/register">cadastre-se</StyledLink>
                <StyledLinkSolid to="/login">
                    acesse seu portfólio
                </StyledLinkSolid>
            </StyledNav>
        </StyledHeader>
    );
};
