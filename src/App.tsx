import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header } from "./components/Header";
import { Loader } from "./components/Loader";
import { routes } from "./routes";
import "./App.css";
import "./index.css";

const router = createBrowserRouter(routes);

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
      <div>
        <Header />
        <RouterProvider router={router} />
      </div>
    </Loader>
  );
};

export default App;
