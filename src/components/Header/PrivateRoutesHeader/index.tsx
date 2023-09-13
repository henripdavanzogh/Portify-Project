import { useContext } from "react";
import { StyledButtonBlackOutline } from "../../../styles/buttons";
import { StyledRobotoParagraph } from "../../../styles/texts";
import { StyledHeader, StyledLogo, StyledNav } from "./style";
import { UserContext } from "../../../providers/UserContext";

export const PrivateHeader = () => {
    const { user, logoutUser } = useContext(UserContext);
    return (
        <StyledHeader>
            <StyledLogo>portify</StyledLogo>
            <StyledNav>
                <StyledRobotoParagraph>{user?.name}</StyledRobotoParagraph>
                <StyledButtonBlackOutline onClick={logoutUser}>
                    Sair
                </StyledButtonBlackOutline>
            </StyledNav>
        </StyledHeader>
    );
};
