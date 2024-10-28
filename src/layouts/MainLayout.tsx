import React from 'react';
import Menu from "../components/Menu";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <Menu/>
            <Outlet/>
            <footer>
                <hr/>
                footer is here
            </footer>

        </div>
    );
};

export default MainLayout;