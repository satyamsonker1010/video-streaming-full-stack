import { useRoutes } from "react-router-dom";
import { homeRoute } from "./home.route";

const ParentRouter = () => {
  return useRoutes([...homeRoute, { path: "*", element: <h1>404</h1> }]);
};

export default ParentRouter;
