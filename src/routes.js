import { useRoutes } from "react-router-dom";
import NotMatch from "./pages/notMatch";
import Pokemon from "./pages/pokemon";

const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Pokemon/>
    },
    
    {
      path: "*",
      element: <NotMatch />
    }
  ]);
};
export default Routes;
