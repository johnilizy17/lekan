import { createBrowserRouter, RouterProvider } from "react-router-dom";

// ** Import All Components **  //
import Login from "./views/public/login";
import Reset from "./components/Reset";
import Register from "./views/public/Register";
import Recovery from "./components/Recovery";
import Profile from "./components/Profile";
import Password from "./components/Password";
import PageNotFound from "./components/PageNotFound";
import Dashboard from "./components/Dashboard";
import Attendance from "./components/Attendance";

// ** root router ** //
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/password",
    element: <Password></Password>,
  },
  {
    path: "/profile",
    element: <Profile></Profile>,
  },
  {
    path: "/attendance",
    element: <Attendance/>,
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
  },
  {
    path: "/recovery",
    element: <Recovery></Recovery>,
  },
  {
    path: "/reset",
    element: <Reset></Reset>,
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
