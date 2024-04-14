import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../Pages/Errorpage/Errorpage";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Account/Login/Login";



export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login/>
      },
    ]
  }
])