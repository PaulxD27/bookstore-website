import React, { useState } from "react";
import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import { Home } from "../pages";
import { routes } from "./routes";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpClM = (): void => setIsOpen(!isOpen);
  return (
    <BrowserRouter>
      <nav className="bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              {/* <!-- Mobile menu button--> */}
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={handleOpClM}
              >
                <span className="sr-only">Open main menu</span>

                <i
                  className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
                ></i>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block lg:hidden h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500"
                  alt="Workflow"
                />
                <img
                  className="hidden lg:block h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500"
                  alt="Workflow"
                />
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}

                  {routes.map(({ to, name }) => (
                    <NavLink
                      key={name}
                      to={to}
                      className={({ isActive }) =>
                        !isActive
                          ? "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                          : "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                      }
                      end
                    >
                      {name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        {isOpen && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
              <a
                href="#"
                className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                aria-current="page"
              >
                Dashboard
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Team
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Projects
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Calendar
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* <div className="shadow-md w-full fixed top-0 left-0">
        <div className="md:flex bg-white py-4 md:px-10 px-7 items-center justify-between">
          <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
            <span className="text-3xl text-indigo-600 mr-1 pt-2">
              <i className="fa-brands fa-react"></i>
            </span>
            Designer
          </div>
          <div
            onClick={handleOpClM}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            <i
              className={isOpen ? "fa-solid fa-xmark" : " fa-solid fa-bars"}
            ></i>
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-200 ease-in ${
              isOpen ? "top-20 opacity-100" : "top-[-490px]"
            } md:opacity-100 opacity-0`}
          >
            {routes.map(({ name, to }) => (
              <li className="md:ml-8 text-xl md:my-0 my-7" key={name}>
                <NavLink
                  to={to}
                  className="text-gray-800 hover:text-gray-400 duration-500"
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div> */}
      <Routes>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="*" element={<Navigate to={routes[0].to} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
