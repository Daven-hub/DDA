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
import Galerie from "./pages/Galerie";
import { Akiba } from "./pages/Akiba";
import { Voyages } from "./pages/voyages";
import { Sparkling } from "./pages/Sparkling";
import { Mindz } from "./pages/Mindz";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/galerie" element={<Galerie />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/:titleKey" element={<ServiceDetail />} />
        <Route path="/destinations" element={<Destination />} />
        <Route path="/secteurs/evenements" element={<Akiba/>}/>
        <Route path="/secteurs/voyages" element={<Voyages/>}/>
        <Route path="/secteurs/vins" element={<Sparkling/>}/>
        <Route path="/secteurs/digital" element={<Mindz/>}/>
      </Route>
    </Routes>
  );
}

export default App;
