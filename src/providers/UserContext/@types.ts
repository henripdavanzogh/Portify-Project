export interface IRegisterUser {
    email: string;
    password: string;
    name: string;
}

export interface IUserLogin {
    email: string;
    password: string;
}

export interface IUser {
    email: string;
    name: string;
    id: number;
}

export interface IUserLoginResponse {
    accessToken: string;
    user: IUser;
}

export interface IPortfolio {
    id: number;
    portfolioId: number;
    name: string;
    repository: string;
    link: string;
    description: string;
    coverUrl: string;
}

export interface IPortifolioPerUser {
    userId: number;
    color: string;
    position: string;
    description: string;
    projects: IPortfolio[];
}

export interface IPortifolioPerPortfolioId {
    id: string;
    userId: number;
    color: string;
    position: string;
    description: string;
    projects: IPortfolio[];
    user: IRegisterUser;
}

export interface IUserContext {
    registerUser: (formData: IRegisterUser) => Promise<void>;
    loginUser: (formData: IUserLogin) => Promise<void>;
    logoutUser: () => void;
    user: IUser | null;
    setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
    loading: boolean;
    getPortifolioPerUser: (userId: number) => Promise<void>;
    portfolio: IPortifolioPerPortfolioId | null;
    setPortfolio: React.Dispatch<
        React.SetStateAction<IPortifolioPerPortfolioId | null>
    >;
    isLightTheme: boolean;
    setIsLightTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IUserProviderProps {
    children: React.ReactNode;
}
