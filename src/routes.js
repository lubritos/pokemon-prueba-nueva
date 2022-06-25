import { useRoutes } from "react-router-dom";
import Home from "./pages/home";
import NotMatch from "./pages/notMatch";
import Pokemon from "./pages/pokemon";

const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/pokemon",
      element: <Pokemon />
    },
    {
      path: "*",
      element: <NotMatch />
    }
  ]);
};
export default Routes;
