import { Home, Contador } from "../pages";

interface Route {
  path: string;
  to: string;
  Component: () => JSX.Element;
  name: string;
}

export const routes: Route[] = [
  {
    path: "/",
    to: "/",
    Component: Home,
    name: "Home",
  },
  {
    path: "contador",
    to: "/contador",
    Component: Contador,
    name: "Contador",
  },
];
