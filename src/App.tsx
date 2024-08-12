import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Loader } from "./components/Loader";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import "./App.css";
import "./index.css";

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

  console.log("Renderizando App, loading:", loading);

  return (
    <Router>
      <Loader loading={loading} minimumLoadTime={800}>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Loader>
    </Router>
  );
};

export default App;
