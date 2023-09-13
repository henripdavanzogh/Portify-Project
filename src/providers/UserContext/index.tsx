import { createContext, useState } from "react";
import { api } from "../../services/api/api";
import {
    IRegisterUser,
    IUserLoginResponse,
    IUserContext,
    IUserProviderProps,
    IUserLogin,
    IUser,
    IPortifolioPerUser,
    IPortifolioPerPortfolioId,
} from "./@types";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
    const navigate = useNavigate();
    const [user, setUser] = useState<IUser | null>(null);
    const [portfolio, setPortfolio] =
        useState<IPortifolioPerPortfolioId | null>(null);
    const [loading, setLoading] = useState(false);
    const [isLightTheme, setIsLightTheme] = useState(true);

    const getPortifolioPerUser = async (userId: number) => {
        try {
            await api.get<IPortifolioPerUser>(
                `/portfolios?_embed=projects&userId=${userId}`
            );
        } catch (error) {
            console.error(error);
        }
    };

    const registerUser = async (formData: IRegisterUser) => {
        try {
            setLoading(true);
            const { data } = await api.post<IUserLoginResponse>(
                "/users",
                formData
            );
            localStorage.setItem("@token", data.accessToken);
            localStorage.setItem("@userId", JSON.stringify(data.user.id));
            toast.success("Cadastro efetuado com sucesso!");
            navigate("/login");
        } catch (error) {
            toast.error(
                "Oops, algo deu errado, verifique o erro abaixo dos campos"
            );
        } finally {
            setLoading(false);
        }
    };

    const loginUser = async (formData: IUserLogin) => {
        try {
            setLoading(true);
            const { data } = await api.post<IUserLoginResponse>(
                "/login",
                formData
            );
            setUser(data.user);
            localStorage.setItem("@token", data.accessToken);
            localStorage.setItem("@userId", JSON.stringify(data.user.id));
            toast.success("Login efetuado com sucesso!");
            navigate("/dashboard");
        } catch (error) {
            toast.error(
                "Opa, algo deu errado, verifique seu login e senha estão corretos"
            );
        } finally {
            setLoading(false);
        }
    };

    const logoutUser = () => {
        toast.success("Logout efetuado com sucesso");
        localStorage.removeItem("@token");
        localStorage.removeItem("@userId");
        setUser(null);
        navigate("/");
    };

    return (
        <UserContext.Provider
            value={{
                portfolio,
                getPortifolioPerUser,
                registerUser,
                loginUser,
                logoutUser,
                user,
                setUser,
                loading,
                setPortfolio,
                isLightTheme,
                setIsLightTheme,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
