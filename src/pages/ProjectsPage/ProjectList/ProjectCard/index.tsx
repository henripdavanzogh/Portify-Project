import penIcon from "../../../../assets/penIcon.svg";
import trashIcon from "../../../../assets/trashIcon.svg";
import { StyledNameProject } from "../../style";
import { StyledMontserratParagraph } from "../../../../styles/texts";
import { IGetProjectsByPortfolioResponse } from "../../../../providers/PortfolioContext/@types";
import { useContext } from "react";
import { PortfolioContext } from "../../../../providers/PortfolioContext";
import { EditDelete, Image, StyledLi } from "./style";
import ideaPic from "../../../../assets/idea.webp";

interface IProjectCardProps {
    project: IGetProjectsByPortfolioResponse;
}

export const ProjectCard = ({ project }: IProjectCardProps) => {
    const { setCurrentProject, setIsEditModalOpen, deleteProjectPortfolio } =
        useContext(PortfolioContext);

    const sendInformationAndOpenModal = (
        project: IGetProjectsByPortfolioResponse
    ) => {
        setCurrentProject(project);
        setIsEditModalOpen(true);
    };

    return (
        <StyledLi>
            <div className="main-content">
                <div className="image">
                    <Image
                        src={
                            project.coverUrl.length > 0
                                ? project.coverUrl
                                : ideaPic
                        }
                        alt={project.name}
                    />
                </div>
                <div className="project-info">
                    <StyledNameProject>{project.name}</StyledNameProject>
                    <StyledMontserratParagraph>
                        {project.description}
                    </StyledMontserratParagraph>
                </div>
            </div>
            <EditDelete>
                <button onClick={() => sendInformationAndOpenModal(project)}>
                    <img
                        src={penIcon}
                        alt="Icone de lápis para editar o seu projeto"
                    />
                </button>

                <button onClick={() => deleteProjectPortfolio(project.id)}>
                    <img
                        src={trashIcon}
                        alt="Icone de lixo para deletar o seu projeto"
                    />
                </button>
            </EditDelete>
        </StyledLi>
    );
};
