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
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Conditions from "./Pages/Conditions/Conditions";
import Strategies from "./Pages/Strategies/Strategies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home/:id",
    element: (
      <SideNav>
        <HomePage />
      </SideNav>
    ),
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
    path: "/conditions",
    element: (
      <SideNav>
        <Conditions />
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
    path: "/strategies",
    element: (
      <SideNav>
        <Strategies />
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
