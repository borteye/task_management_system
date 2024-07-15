import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { selectToken } from "../redux/features/tokenSlice";

const ProtectedRoutes = () => {
  const token = useSelector(selectToken);

  return token ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
