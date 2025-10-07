import { Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout"
import { Home } from "./pages"
import About from "./pages/About"
import { Service } from "./pages/service"
import { Contact } from "./pages/contact"
import ServiceDetail from "./pages/ServiceDetail"
import { Destination } from "./pages/Destination"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Service />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/destinations" element={<Destination />} />
        </Route>
      </Routes>
    </>
  )
}

export default App