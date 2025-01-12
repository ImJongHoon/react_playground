import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import App from "../App";
import NotFound from "../pages/NotFound";
import User from "../pages/User";
import Login from "../pages/Login";

const router = createBrowserRouter([
    // 모든 라우터들의 컨테이너
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "users/:userId",
                element: <User/>,
            },
        ],
        errorElement: <NotFound />
    }
])

export default router;