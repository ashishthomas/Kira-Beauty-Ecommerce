import { Navigate, RouteObject } from "react-router";
import AppLayout from "../components/AppLayout/AppLayout";
import HomePage from "../pages/Home/HomePage";

export const RootRoutes: RouteObject[] = [
  {
    path: "",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element:<Navigate to="home" replace/>,
      },
      {
        path: "home",
        element: <HomePage/>,
      },
      {
        path: "app",
        element: <div>App</div>,
      },
    ],
  },
];
