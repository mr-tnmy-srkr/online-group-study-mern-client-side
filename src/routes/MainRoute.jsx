import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Assignments from "../pages/Assignments";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About";
import LoginPrivate from "./LoginPrivate";
import CreateAssignment from "../pages/CreateAssignment";
import PrivateRoute from "./privateRoute";
import UpdateAssignment from "../pages/UpdateAssignment";

const MainRoute = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: 'assignments',
            element: <Assignments></Assignments>,
          },
          {
            path: 'assignments/update-assignment/:id',
            element: <UpdateAssignment></UpdateAssignment>,
          },
          {
            path: 'about',
            element: <About></About>,
          },
          {
            path: 'login',
            element: <LoginPrivate><Login /></LoginPrivate>,
          },
          {
            path: 'signup',
            element: <LoginPrivate><Register /></LoginPrivate>,
          },
          {
            path: 'create-assignment',
            element: <PrivateRoute><CreateAssignment /></PrivateRoute>,
          },
        ],
      },
     
  ]);
  
  export default MainRoute;
  