import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/dashbboard/Dashboard";
import User from "../pages/users/User";
import Products from "../pages/products/Products";
import UserDetails from "../pages/users/UserDetails";
import ViewProduct from "../pages/products/ViewProduct";

export const route = createBrowserRouter([
    
    {
        path: "/",
        element: <Dashboard />,
        children: [
            {
                path: "/",
                element: <User />
            },
            {
                path: "/users",
                element: <User />
            },
            {
                path: "/users/:id",
                element: <UserDetails />
            },
            {
                path: "/products",
                element: <Products />
            },
            {
                path: "/product/:id",
                element: <ViewProduct />
            },

        ]
    }
])