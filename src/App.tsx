import React, { useState, useEffect, Suspense } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Loader } from "./components/Loader";
import { routes } from "./routes";
import "./App.css";
import "./index.css";

const Layout = () => (
  <>
    <Header />
    <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
    </Suspense>
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: routes,
  },
]);

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Iniciando proceso de carga");
    const initApp = async () => {
      // Simulating some initialization process
      await new Promise((resolve) => setTimeout(resolve, 500));
      console.log("Proceso de carga completado");
      setLoading(false);
    };

    initApp();
  }, []);

  return (
    <Loader loading={loading} minimumLoadTime={800}>
      <RouterProvider router={router} />
    </Loader>
  );
};

export default App;