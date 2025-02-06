import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../Layouts/MainLayout";
import DetailsPage from "../pages/DetailsPage";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <MainLayout />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/details/:id',
                    element: <DetailsPage />
                }

            ]
        }
    ]
)

export default router;