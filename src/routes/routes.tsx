import {createBrowserRouter} from "react-router-dom";
import AuthResourcesPage from "../pages/AuthResourcesPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import MainLayout from "../layouts/MainLayout";

export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children:[
            {index: true, element: <HomePage/>},
            {path: '/login', element: <LoginPage/>},
            {path: '/auth/resources', element: <AuthResourcesPage/>}
        ]
    }
])