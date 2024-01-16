import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  // Outlet,
  // Route,
  // Link,
} from "react-router-dom";
import Login from "./Pages/Login/Login";
import SideNav from "./components/SideNav";
import HomePage from "./Pages/HomePage/Homepage";
import Market from "./Pages/Market/Market";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Dashboard from "./Pages/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: (
      <SideNav>
        <HomePage />
      </SideNav>
    ),
  },
  {
    path: "/market",
    element: (
      <SideNav>
        <Market />
      </SideNav>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <SideNav>
        <Dashboard />
      </SideNav>
    ),
  },
  {
    path: "*",
    element: (
      <SideNav>
        <ErrorPage />
      </SideNav>
    ),
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
