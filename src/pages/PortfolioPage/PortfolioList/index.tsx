import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";
import { PortfolioListCard } from "./PortfolioListCard";
import { IGetProjectsByPortfolioResponse } from "../../../providers/PortfolioContext/@types";
import { PortfolioProjectsList } from "./style";

export const PortfolioList = () => {
    const { portfolio } = useContext(UserContext);

    const portfolioProjects: any = portfolio?.projects;
    return (
        <PortfolioProjectsList>
            {portfolioProjects?.map(
                (project: IGetProjectsByPortfolioResponse) => {
                    return (
                        <PortfolioListCard key={project.id} project={project} />
                    );
                }
            )}
        </PortfolioProjectsList>
    );
};
