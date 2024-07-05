import React from 'react';
import Link from 'next/link';

const Login: React.FC = () => {
  return (
    <div className="min-h-screen flex">
      <div className="flex-1 flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500 p-10">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Hello!
          </h2>
          <p className="text-center text-sm text-gray-600">
            Sign in to your account
          </p>
          <form className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="flex items-center border rounded-md p-2 mb-2">
                <span className="mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-purple-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" />
                  </svg>
                </span>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div className="flex items-center border rounded-md p-2 mb-2">
                <span className="mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-purple-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" />
                  </svg>
                </span>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <Link href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-purple-500 to-indigo-500 hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                SIGN IN
              </button>
            </div>
          </form>
          <p className="text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
              Create
            </Link>
          </p>
        </div>
      </div>
      <div className="hidden lg:flex flex-1 items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500 p-10 text-white">
        <div className="max-w-md space-y-8">
          <h2 className="text-3xl font-extrabold">Welcome Back!</h2>
          <p>
          Sign in to continue enjoying our exclusive features and great user experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
