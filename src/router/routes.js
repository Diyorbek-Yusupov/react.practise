import MainPage from "../mainPage/MainPage";
import Game from "../navigitionPage/game";
import Page404 from "../mainPage/Page404";
import Login from "../navigitionPage/login";

export const publicRoutes = [
    {path: "/game", element:<Game/>},
    {path: "/posts", element:<MainPage/>},
    {path: "*", element:<Page404/>},
    {path: "/login", element:<MainPage/>}
]

export const privateRoutes = [
    {path: "login", element:<Login/>}
]