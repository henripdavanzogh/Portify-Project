import { IGetProjectsByPortfolioResponse } from "../../../../providers/PortfolioContext/@types";
import gitIcon from "../../../../assets/gitIcon.svg";
import repoIcon from "../../../../assets/repoIcon.svg";
import {
    InformationsContainer,
    PortfoliosCard,
    ProjectDescription,
    ProjectTitle,
} from "./style";
import { useContext } from "react";
import { UserContext } from "../../../../providers/UserContext";

interface IPortfolioListCardProps {
    project: IGetProjectsByPortfolioResponse;
}

export const PortfolioListCard = ({ project }: IPortfolioListCardProps) => {
    const { isLightTheme } = useContext(UserContext);

    return (
        <PortfoliosCard>
            <div>
                <img src={project.coverUrl} alt={project.name} />

                <InformationsContainer>
                    <div>
                        <ProjectTitle color={isLightTheme}>
                            {project.name}
                        </ProjectTitle>
                        <ProjectDescription color={isLightTheme}>
                            {project.description}
                        </ProjectDescription>
                    </div>
                    <div>
                        <a href={project.repository} target="_blank">
                            <img
                                src={gitIcon}
                                alt="
            Icone para abrir o repositório do usuário"
                            />
                        </a>
                        <a href={project.link}>
                            <img
                                src={repoIcon}
                                alt="Ícone para abrir o link de deploy do projeto"
                            />
                        </a>
                    </div>
                </InformationsContainer>
            </div>
        </PortfoliosCard>
    );
};
