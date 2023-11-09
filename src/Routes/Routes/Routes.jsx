import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../Pages/Errorpage/Errorpage";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";



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
    ]
  }
])