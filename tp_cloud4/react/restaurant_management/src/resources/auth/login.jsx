import { useState } from "react";
import { Link, useNavigate } from "react-router";
import Button from "../../components/button";
import Loader from "../../components/loader";
import Alert from "../../components/alert";
import axios from "axios";

export default function Login() {
    const navigate = useNavigate();
    const [pending, setPending] = useState(false);
    const [error, setError] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = (e)=> {
        e.preventDefault();
        axios.post(' http://localhost:3001/api/v1/user/login', { email, password })
            .then(({ data })=> {
                window.localStorage.setItem('token', data.token);
                navigate('/dashboard');
            })
            .catch(err=> {
              setError(err.response.data.message);
            })
            .finally(()=> {
                setPending(false);
            })
    }
  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div>
          <h1 className="text-3xl mb-10">Login</h1>
          {
            pending && <Loader />
          }
        </div>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form className="space-y-4 md:space-y-6" onSubmit={loginHandler}>
              <div className="mb-6">
                { error && <Alert message={error} /> }
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  required
                  value={email}
                  onChange={({ target })=> setEmail(target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                  value={password}
                  onChange={({ target })=> setPassword(target.value)}
                />
              </div>
              <Button type="submit" text="Login" className="w-full"/>
              <p className="text-sm font-light text-gray-500">
                Don’t have an account yet?{" "}
                <Link
                  to='/register'
                  className="font-medium text-primary-600 hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}