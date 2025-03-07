import { Link, useNavigate } from "react-router";

export default function NavBar() {
  const navigate = useNavigate();

  const logoutHandler = () => {
    const confirm = window.confirm("Are you sure want to logout?");
  };
  return (
    <nav className="bg-white border-b border-gray-200 mb-6">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to={window.localStorage.getItem('token') ? '/dashboard' : '/'}>Restau</Link>
        <ul className="flex items-center gap-x-2">
          {window.localStorage.getItem("token") ? (
            <>
              <Link to="/chefs">Chefs</Link>
              <Link to="/recettes">Recettes</Link>
              <Link to="/restaurants">Restaurants</Link>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </ul>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {/* <button
            type="button"
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
            onClick={logoutHandler}
          >
            Logout
          </button> */}
        </div>
      </div>
    </nav>
  );
}
