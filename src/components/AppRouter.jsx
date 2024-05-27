import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "../router/routes";
import { AuthContext } from "./context";
import Loader from "./UI/loader/Loader";

const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext)
  if(isLoading){
    return <Loader/>
  }
  return isAuth ? (
    <Routes>
      {PrivateRoutes.map((route, index) => (
        <Route key={index} exact={route.exact} path={route.path} element={route.element} />
      ))}
      ,
    </Routes>
  ) : (
    <Routes>
      {PublicRoutes.map((route, index) => (
        <Route key={index} exact={route.exact} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default AppRouter;
