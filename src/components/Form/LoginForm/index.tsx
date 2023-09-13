import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { TLoginFormSchema, loginFormSchema } from "./loginFormSchema";
import { useContext, useState } from "react";
import { UserContext } from "../../../providers/UserContext";
import { IUserLogin } from "../../../providers/UserContext/@types";
import { StyledLoginForm, StyledPasswordField } from "./style";
import eyeHidden from "../../../assets/eyeHidden.svg";
import { StyledButtonSolid, StyledLinkOutline } from "../../../styles/buttons";
import { StyledRobotoParagraph } from "../../../styles/texts";

export const LoginForm = () => {
    const [isTypePassword, setIsTypePassword] = useState(true);

    const { loginUser } = useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TLoginFormSchema>({
        resolver: zodResolver(loginFormSchema),
    });

    const onSubmit: SubmitHandler<TLoginFormSchema> = (
        formData: IUserLogin
    ) => {
        loginUser(formData);
    };

    return (
        <StyledLoginForm onSubmit={handleSubmit(onSubmit)}>
            <Input
                type="email"
                placeholder="E-mail"
                {...register("email")}
                error={errors.email}
            />

            <StyledPasswordField>
                <Input
                    {...register("password")}
                    placeholder="Digite sua senha"
                    type={isTypePassword ? "password" : "text"}
                />

                <img
                    onClick={() => setIsTypePassword(!isTypePassword)}
                    src={eyeHidden}
                    alt="Botão em formato de olho que revela e esconde a senha"
                />
            </StyledPasswordField>
            <StyledButtonSolid type="submit" className="enterButton">
                Entrar
            </StyledButtonSolid>
            <StyledRobotoParagraph>Não possui cadastro?</StyledRobotoParagraph>
            <StyledLinkOutline className="registerButton" to="/register">
                Cadastre-se
            </StyledLinkOutline>
        </StyledLoginForm>
    );
};
