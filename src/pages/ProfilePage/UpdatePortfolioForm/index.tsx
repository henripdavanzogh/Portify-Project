import { zodResolver } from "@hookform/resolvers/zod";
import {
    TUpdatePortfolioFormSchema,
    updatePortfolioFormSchema,
} from "./updatePortfolioFormSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import { useContext } from "react";
import { PortfolioContext } from "../../../providers/PortfolioContext";
import { IUpdatePortfolio } from "../../../providers/PortfolioContext/@types";
import { Input } from "../../../components/Input/index";
import { Select } from "../../../components/Select";
import { StyledButtonSolid } from "../../../styles/buttons";
import { StyledForm } from "./style";

export const UpdatePortfolioForm = () => {
    const { updatePortfolio } = useContext(PortfolioContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<TUpdatePortfolioFormSchema>({
        resolver: zodResolver(updatePortfolioFormSchema),
    });

    const onSubmit: SubmitHandler<TUpdatePortfolioFormSchema> = (
        formData: IUpdatePortfolio
    ) => {
        updatePortfolio(formData);
        reset();
    };
    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <Select
                error={errors.color}
                label="Modo de cor"
                {...register("color")}
            >
                <option value="">Selecione uma cor</option>
                <option value="light">Claro</option>
                <option value="dark">Escuro</option>
            </Select>
            <Input
                type="text"
                error={errors.position}
                label="Cargo"
                placeholder="Cargo"
                {...register("position")}
            />
            <Input
                type="text"
                error={errors.description}
                label="Descrição"
                placeholder="Descrição"
                {...register("description")}
            />
            <div className="update-button">
                <StyledButtonSolid type="submit">
                    Atualizar portfólio
                </StyledButtonSolid>
            </div>
        </StyledForm>
    );
};
