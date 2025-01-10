import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Root from "../Root";
import NotFound from "../pages/NotFound";
import User from "../pages/User";

const router = createBrowserRouter([
    // 모든 라우터들의 컨테이너
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home />
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