import { useContext } from "react";
import {
    TCreatePortfolioFormSchema,
    createPortfolioFormSchema,
} from "./createPortfolioFormSchema";
import { PortfolioContext } from "../../../providers/PortfolioContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { ICreatePortfolio } from "../../../providers/PortfolioContext/@types";
import { Select } from "../../../components/Select";
import { Input } from "../../../components/Input";
import { StyledButtonSolid } from "../../../styles/buttons";
import { StyledForm } from "./style";

export const CreatePortfolioForm = () => {
    const { createPortfolio } = useContext(PortfolioContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TCreatePortfolioFormSchema>({
        resolver: zodResolver(createPortfolioFormSchema),
    });

    const onSubmit: SubmitHandler<TCreatePortfolioFormSchema> = (
        formData: ICreatePortfolio
    ) => {
        createPortfolio(formData);
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
            <StyledButtonSolid type="submit">Criar portfólio</StyledButtonSolid>
        </StyledForm>
    );
};
