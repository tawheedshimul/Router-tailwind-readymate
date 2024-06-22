import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../Pages/Errorpage/Errorpage";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Account/Login/Login";
import Registration from "../../Pages/Account/Login/Registration";
import Message from "../../Pages/Message/Message";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const fetchPosts = async () => {
  try {
    const response = await fetch('https://server-tawheed-blog.vercel.app/blogs');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return { error: error.message };
  }
};

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <Main />,
    children: [
      {
        path: '/',
        element: <PrivateRoute><Home /></PrivateRoute>,
        loader: fetchPosts,
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
]);
