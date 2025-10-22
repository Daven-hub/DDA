import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages";
import About from "./pages/About";
import { Service } from "./pages/service";
import { Contact } from "./pages/contact";
import ServiceDetail from "./pages/ServiceDetail";
import { Destination } from "./pages/Destination";
import Loader from "./components/Ux/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2s d’attente
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/destinations" element={<Destination />} />
      </Route>
    </Routes>
  );
}

export default App;
