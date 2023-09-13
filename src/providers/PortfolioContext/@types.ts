export interface ICreatePortfolio {
    color: string;
    position: string;
    description: string;
}

export interface IUpdatePortfolio {
    color?: string;
    position?: string;
    description?: string;
}

export interface IAddingProject {
    name: string;
    repository: string;
    link?: string;
    coverUrl?: string;
    description: string;
}

export interface IUpdateProject {
    name: string;
    repository: string;
    link?: string;
    description: string;
    coverUrl?: string;
}

export interface ICreatePortfolioResponse {
    userId: number;
    color: string;
    position: string;
    description: string;
    id: number;
}

export interface IUpdatePortfolioResponse {
    color?: string;
    position?: string;
    description?: string;
    id: number;
}

export interface IAddingProjectResponse {
    portfolioId: number;
    name: string;
    repository: string;
    link: string;
    description: string;
    coverUrl: string;
    id: number;
}

export interface IUpdateProjectResponse {
    name: string;
    repository: string;
    link?: string;
    description: string;
    coverUrl?: string;
    id: number;
}

export interface IGetProjectsByPortfolioResponse {
    portfolioId: number;
    name: string;
    repository: string;
    link: string;
    id: number;
    description: string;
    coverUrl: string;
}

export interface IPortfolioContext {
    listProject: IGetProjectsByPortfolioResponse[];
    setListProject: React.Dispatch<
        React.SetStateAction<IGetProjectsByPortfolioResponse[]>
    >;
    currentProject: IGetProjectsByPortfolioResponse | null;
    setCurrentProject: React.Dispatch<
        React.SetStateAction<IGetProjectsByPortfolioResponse | null>
    >;

    createPortfolio: (formData: ICreatePortfolio) => Promise<void>;

    updatePortfolio: (formData: IUpdatePortfolio) => Promise<void>;
    addingProjectPortfolio: (formData: IAddingProject) => Promise<void>;
    updateProjectPortfolio: (
        formData: IUpdateProject,
        idProject: number
    ) => Promise<void>;
    deleteProjectPortfolio: (id: number) => Promise<void>;
    getProjectsByPortfolio: () => Promise<void>;
    portId: number | null;
    isEditModalOpen: boolean;
    setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isAddProjectModalOpen: boolean;
    setIsAddProjectModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IPortfolioProviderProps {
    children: React.ReactNode;
}
