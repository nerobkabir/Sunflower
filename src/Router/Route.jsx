import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import Home from "../pages/Home";
import CategoryDetails from "../pages/CategoryDetails";
import AuthLayout from "../pages/AuthLayout";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import PrivateRoute from "../privateRouter/PrivateRoute";
import MyProfile from "../pages/MyProfile";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        path: "/home",
        element: <Home />,
        loader: () => fetch("/category.json").then(res => res.json()),
      },
      {
        path: "/my-profile",
        element: <MyProfile></MyProfile>
      },
      {
        path: "/category-details/:skillId",
        element: (
          <PrivateRoute>
            <CategoryDetails />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const res = await fetch("/category.json");
          const data = await res.json();
          const skill = data.find(item => item.skillId === parseInt(params.skillId));
          return skill;
        },
      },
    ],
  },

  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/signup",
        element: <SignUp />,
      },
    ],
  },
]);
