import { Link, Route, Routes } from "react-router";
import Register from "../resources/auth/register";
import Login from "../resources/auth/login";
import Chefs from "../resources/chefs/chefs";
import Recettes from "../resources/recettes/recettes";
import Restaurants from "../resources/restaurants/restaurants";
import { AuthMiddleware, Auth } from "../middlewares/auth";

const Dashboard = () => {
  return (
    <div className="flex gap-x-4">
      <Link to="/chefs" className="border p-4">
        Chefs
      </Link>
      <Link to="/recettes" className="border p-4">
        Recettes
      </Link>
      <Link to="/restaurants" className="border p-4">
        Restaurants
      </Link>
    </div>
  );
};

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Main</h1>} />
      <Route element={<Auth />}>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route element={<AuthMiddleware />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chefs" element={<Chefs />} />
        <Route path="/recettes" element={<Recettes />} />
        <Route path="/restaurants" element={<Restaurants />} />
      </Route>
    </Routes>
  );
};
export default MyRoutes;