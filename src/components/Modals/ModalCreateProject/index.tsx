import { useContext } from "react";
import { StyledButtonSolid } from "../../../styles/buttons";
import {
    ICreateAndEditProjectsSchema,
    modalFormSchema,
} from "../createAndEditProjectsSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IAddingProject } from "../../../providers/PortfolioContext/@types";
import { PortfolioContext } from "../../../providers/PortfolioContext";
import { Input } from "../../Input";
import { StyledTitle1 } from "../../../styles/texts";

import { StyledModal, StyledCreateProject } from "./style";
import { StyledButton } from "../ModalEditProject/style";

export const ModalCreateProject = () => {
    const { addingProjectPortfolio, setIsAddProjectModalOpen } =
        useContext(PortfolioContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ICreateAndEditProjectsSchema>({
        resolver: zodResolver(modalFormSchema),
    });

    const onSubmit: SubmitHandler<ICreateAndEditProjectsSchema> = (
        formData: IAddingProject
    ) => {
        addingProjectPortfolio(formData);
    };

    return (
        <StyledModal>
            <StyledCreateProject onSubmit={handleSubmit(onSubmit)}>
                <div className="modal-header">
                    <StyledTitle1>Criar projeto</StyledTitle1>
                    <div className="button">
                        <StyledButton
                            onClick={() => setIsAddProjectModalOpen(false)}
                        >
                            X
                        </StyledButton>
                    </div>
                </div>
                <Input
                    type="text"
                    placeholder="Nome"
                    {...register("name")}
                    error={errors.name}
                ></Input>
                <Input
                    type="text"
                    placeholder="Descrição resumida"
                    {...register("description")}
                    error={errors.description}
                ></Input>
                <Input
                    type="text"
                    placeholder="Repositorio"
                    {...register("repository")}
                    error={errors.repository}
                ></Input>
                <Input
                    type="text"
                    placeholder="Link do deploy (opcional)"
                    {...register("link")}
                    error={errors.link}
                ></Input>
                <Input
                    type="text"
                    placeholder="URL da imagem (opcional)"
                    {...register("coverUrl")}
                    error={errors.coverUrl}
                ></Input>
                <div className="button-container">
                    <StyledButtonSolid type="submit">
                        Criar Projeto
                    </StyledButtonSolid>
                </div>
            </StyledCreateProject>
        </StyledModal>
    );
};
