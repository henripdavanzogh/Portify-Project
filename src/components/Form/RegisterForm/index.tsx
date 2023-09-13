import { SubmitHandler, useForm } from "react-hook-form";
import { useContext } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema, TRegisterFormSchema } from "./registerFormSchema";
import { IRegisterUser } from "../../../providers/UserContext/@types";
import { UserContext } from "../../../providers/UserContext";
import { Input } from "../../Input";
import { Form } from "./style";
import { StyledButtonSolid } from "../../../styles/buttons";

export const RegisterForm = () => {
    const { registerUser } = useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TRegisterFormSchema>({
        resolver: zodResolver(registerFormSchema),
    });

    const onSubmit: SubmitHandler<TRegisterFormSchema> = (
        formData: IRegisterUser
    ) => {
        registerUser(formData);
    };

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="inputs">
                    <div className="input__container-text">
                        <div className="message">
                            <Input
                                type="text"
                                placeholder="Nome"
                                {...register("name")}
                                error={errors.name}
                            />
                        </div>
                        <div className="message">
                            <Input
                                type="email"
                                placeholder="E-mail"
                                {...register("email")}
                                error={errors.email}
                            />
                        </div>
                    </div>
                    <div className="input__container-password">
                        <div className="message">
                            <Input
                                type="password"
                                placeholder="Senha"
                                {...register("password")}
                                error={errors.password}
                            />
                        </div>

                        <div className="message">
                            <Input
                                type="password"
                                placeholder="Confirme sua senha"
                                {...register("confirm")}
                                error={errors.confirm}
                            />
                        </div>
                    </div>
                </div>
                <div className="button__container">
                    <StyledButtonSolid type="submit">
                        Cadastrar-se
                    </StyledButtonSolid>
                </div>
            </Form>
        </>
    );
};
