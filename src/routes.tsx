/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import { RouteObject } from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home/Home"));
const Mission = React.lazy(() => import("./pages/Mission/Mission"));
const Vision = React.lazy(() => import("./pages/Vision/Vision"));
const Contact = React.lazy(() => import("./pages/Contact/Contact"));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <React.Suspense fallback={<div>Loading...</div>}><Home /></React.Suspense>,
  },
  {
    path: "/mission",
    element: <React.Suspense fallback={<div>Loading...</div>}><Mission /></React.Suspense>,
  },
  {
    path: "/vision",
    element: <React.Suspense fallback={<div>Loading...</div>}><Vision /></React.Suspense>,
  },
  {
    path: "/contact",
    element: <React.Suspense fallback={<div>Loading...</div>}><Contact /></React.Suspense>,
  },
];