import { GlobalStyle } from "./styles/global";
import { RoutesMain } from "./routes/RoutesMain";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { UserContext } from "./providers/UserContext";

export const App = () => {
    const { isLightTheme } = useContext(UserContext);
    return (
        <>
            <GlobalStyle />
            <RoutesMain />
            <ToastContainer
                theme={isLightTheme ? "light" : "dark"}
                autoClose={2000}
            />
        </>
    );
};
