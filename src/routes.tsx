import { RouteObject } from "react-router-dom";
import Home from "./pages/Home/Home";
import {Mission} from "./pages/Mission";
import {Vision} from "./pages/Vision";
import Contact from "./pages/Contact/Contact";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/mission",
    element: <Mission />,
  },
  {
    path: "/vision",
    element: <Vision />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
];