import { useContext } from "react";
import { ProjectCard } from "./ProjectCard";
import { PortfolioContext } from "../../../providers/PortfolioContext";
import { StyledUl } from "./style";

export const ProjectList = () => {
    const { listProject } = useContext(PortfolioContext);
    return (
        <>
            <StyledUl className="projects-list">
                {listProject?.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </StyledUl>
        </>
    );
};
