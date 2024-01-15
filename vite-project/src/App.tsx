import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  // Route,
  // Link,
} from "react-router-dom";
import Login from "./Pages/Login/Login";
import SideNav from "./components/SideNav";
import HomePage from "./Pages/HomePage/Homepage";
import Market from "./Pages/Market/Market";

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
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
