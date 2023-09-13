import { useContext } from "react";
import { StyledButtonSolid } from "../../../styles/buttons";
import {
    ICreateAndEditProjectsSchema,
    modalFormSchema,
} from "../createAndEditProjectsSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IUpdateProject } from "../../../providers/PortfolioContext/@types";
import { PortfolioContext } from "../../../providers/PortfolioContext";
import { Input } from "../../Input";
import { StyledTitle1 } from "../../../styles/texts";
import { StyleModal, StyledButton, StyledEditProject } from "./style";

export const ModalEditProject = () => {
    const { updateProjectPortfolio, setIsEditModalOpen, currentProject } =
        useContext(PortfolioContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ICreateAndEditProjectsSchema>({
        resolver: zodResolver(modalFormSchema),
    });

    const onSubmit: SubmitHandler<ICreateAndEditProjectsSchema> = (
        formData: IUpdateProject
    ) => {
        const idProject = currentProject?.id;

        if (idProject) {
            updateProjectPortfolio(formData, idProject);
        }
    };

    return (
        <StyleModal>
            <StyledEditProject onSubmit={handleSubmit(onSubmit)}>
                <div className="div-headerModal">
                    <StyledTitle1>Editar projeto</StyledTitle1>
                    <div className="close">
                        <StyledButton onClick={() => setIsEditModalOpen(false)}>
                            X
                        </StyledButton>
                    </div>
                </div>
                <div className="div-inputModal">
                    <Input
                        type="text"
                        placeholder={currentProject?.name}
                        {...register("name")}
                        error={errors.name}
                    ></Input>
                    <Input
                        type="text"
                        placeholder={currentProject?.description}
                        {...register("description")}
                        error={errors.description}
                    ></Input>
                    <Input
                        type="text"
                        placeholder={currentProject?.repository}
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
                </div>
                <div className="button-container">
                    <StyledButtonSolid type="submit">
                        Editar Projeto
                    </StyledButtonSolid>
                </div>
            </StyledEditProject>
        </StyleModal>
    );
};
