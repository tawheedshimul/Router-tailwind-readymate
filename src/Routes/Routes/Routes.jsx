import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../Pages/Errorpage/Errorpage";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Account/Login/Login";
import Registration from "../../Pages/Account/Login/Registration";
import Message from "../../Pages/Message/Message";
import PrivateRoute from "../PrivateRoute/PrivateRoute";



export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <PrivateRoute><Home></Home></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/registration',
        element: <Registration />
      },
      {
        path: '/message',
        element: <Message />
      },
    ]
  }
])