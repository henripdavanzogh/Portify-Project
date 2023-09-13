import { createContext, useState } from "react";
import {
    IAddingProject,
    IAddingProjectResponse,
    ICreatePortfolio,
    ICreatePortfolioResponse,
    IGetProjectsByPortfolioResponse,
    IPortfolioContext,
    IPortfolioProviderProps,
    IUpdatePortfolio,
    IUpdatePortfolioResponse,
    IUpdateProject,
    IUpdateProjectResponse,
} from "./@types";
import { api } from "../../services/api/api";
import { toast } from "react-toastify";

export const PortfolioContext = createContext({} as IPortfolioContext);

export const PortfolioProvider = ({ children }: IPortfolioProviderProps) => {
    const [listProject, setListProject] = useState<
        IGetProjectsByPortfolioResponse[]
    >([]);
    const [currentProject, setCurrentProject] =
        useState<IGetProjectsByPortfolioResponse | null>(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isAddProjectModalOpen, setIsAddProjectModalOpen] = useState(false);
    const [portId, setPortId] = useState<number | null>(null);

    const token: string | null = localStorage.getItem("@token");

    const headers: object = {
        Authorization: `Bearer ${token}`,
    };

    const createPortfolio = async (formData: ICreatePortfolio) => {
        const userId = localStorage.getItem("@userId");
        const body = { ...formData, userId: Number(userId) };
        try {
            const { data } = await api.post<ICreatePortfolioResponse>(
                "/portfolios",
                body,
                {
                    headers,
                }
            );
            setPortId(data.id);
            toast.success("Portfolio criado com sucesso!");
        } catch (error) {
            console.error(error);
        }
    };

    const updatePortfolio = async (formData: IUpdatePortfolio) => {
        try {
            await api.patch<IUpdatePortfolioResponse>(
                `/portfolios/${portId}`,
                formData,
                { headers }
            );

            toast.success("Portfolio atualizado com sucesso!");
        } catch (error) {
            toast.error("Oops, algo deu errado");
        }
    };

    const addingProjectPortfolio = async (formData: IAddingProject) => {
        const body = { ...formData, portfolioId: portId };
        try {
            const { data } = await api.post<IAddingProjectResponse>(
                "/projects ",
                body,
                {
                    headers,
                }
            );
            const newList = [...listProject, data];
            setListProject(newList);
            toast.success("Projeto adicionado com sucesso ao portfólio!");
            setIsAddProjectModalOpen(false);
        } catch (error) {
            toast.error("Oops, algo deu errado");
        }
    };

    const updateProjectPortfolio = async (
        formData: IUpdateProject,
        idProject: number
    ) => {
        try {
            const { data } = await api.put<IUpdateProjectResponse>(
                `/projects/${idProject}`,
                formData,
                {
                    headers,
                }
            );

            toast.success("Projeto atualizado com sucesso");

            const newList: any = listProject.map((project) => {
                if (project.id === idProject) {
                    return data;
                } else {
                    return project;
                }
            });

            setListProject(newList);

            setIsEditModalOpen(false);
        } catch (error) {
            toast.error("Oops, algo deu errado");
        }
    };

    const deleteProjectPortfolio = async (id: number) => {
        try {
            await api.delete(`/projects/${id}`, { headers });
            toast.success("Projeto excluído com sucesso!");

            const newlistProject = listProject.filter(
                (project) => project.id !== id
            );

            setListProject(newlistProject);
        } catch (error) {
            toast.error("Oops, algo deu errado!");
        }
    };

    const getProjectsByPortfolio = async () => {
        try {
            const { data } = await api.get<IGetProjectsByPortfolioResponse[]>(
                `/portfolios/${portId}/projects/`
            );
            setListProject(data);
        } catch (error) {
            toast.error("Oops, algo deu errado");
        }
    };

    return (
        <PortfolioContext.Provider
            value={{
                listProject,
                setListProject,
                createPortfolio,
                currentProject,
                setCurrentProject,
                updatePortfolio,
                addingProjectPortfolio,
                updateProjectPortfolio,
                deleteProjectPortfolio,
                getProjectsByPortfolio,
                portId,
                isEditModalOpen,
                setIsEditModalOpen,
                isAddProjectModalOpen,
                setIsAddProjectModalOpen,
            }}
        >
            {children}
        </PortfolioContext.Provider>
    );
};
