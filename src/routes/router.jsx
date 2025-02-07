import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../Layouts/MainLayout";
import BloodAidDetails from "../pages/ProjectDetailsPage/BloodAidDetails";
import WhereIsItDetails from "../pages/ProjectDetailsPage/WhereIsItDetails";
import CrowdCubeDetails from "../pages/ProjectDetailsPage/CrwodCubeDetails";


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
                    path: '/blood-aid-details',
                    element: <BloodAidDetails />
                },
                {
                    path: '/where-is-it-details',
                    element: <WhereIsItDetails />
                },
                {
                    path: '/crowd-cube-details',
                    element: <CrowdCubeDetails />
                }

            ]
        }
    ]
)

export default router;