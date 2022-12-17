import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { Menu } from "./Menu";

const Main = () => {
    return (
        <>
            <Menu />
            <Outlet />
            <Footer />
        </>
    );
};

export default Main;
