import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { PublicRoutes } from "./PublicRoutes";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { DashboardPage } from "../pages/DashboardPage";
import { RegisterPage } from "../pages/RegisterPage";
import { ProjectPage } from "../pages/ProjectsPage";
import { PortfolioProvider } from "../providers/PortfolioContext";
import { ProfilePage } from "../pages/ProfilePage";
import { PortfolioPage } from "../pages/PortfolioPage";

export const RoutesMain = () => {
    return (
        <Routes>
            <Route element={<PublicRoutes />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/portfolio/:id" element={<PortfolioPage />} />
            </Route>
            <Route element={<ProtectedRoutes />}>
                <Route
                    path="/dashboard"
                    element={
                        <PortfolioProvider>
                            <DashboardPage />
                        </PortfolioProvider>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <PortfolioProvider>
                            <ProfilePage />
                        </PortfolioProvider>
                    }
                />
                <Route
                    path="/projects"
                    element={
                        <PortfolioProvider>
                            <ProjectPage />
                        </PortfolioProvider>
                    }
                />
            </Route>
            <Route
                path="*"
                element={<h1>Erro 404:Página não encontrada!</h1>}
            />
        </Routes>
    );
};
