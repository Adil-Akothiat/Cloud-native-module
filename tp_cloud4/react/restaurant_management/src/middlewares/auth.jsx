import { useEffect } from "react";
import axios from "axios";
import { Outlet, Navigate } from "react-router";

export const AuthMiddleware = () => {
  if (window.localStorage.getItem("token")) {
    const token = window.localStorage.getItem("token");
    useEffect(() => {
      (() => {
        axios
          .get("http://localhost:3001/api/v1/user/isAuth", {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then((res) => {
            // logged in
          })
          .catch((err) => {
            window.localStorage.clear();
            window.location.reload();
          });
      })();
    }, []);
    return <Outlet />;
  }
  return <Navigate to="/login" />;
};

export const Auth = () => {
  if (window.localStorage.getItem("token")) {
    return <Navigate to="/dashboard" />;
  }
  return <Outlet />;
};
