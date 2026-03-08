import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Impact from "./pages/Impact";
import Women from "./pages/Women";
import Inspiration from "./pages/Inspiration";
import Wall from "./pages/Wall";

function App() {
  return (
    <BrowserRouter basename="/womens-day">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/women" element={<Women />} />
        <Route path="/inspiration" element={<Inspiration />} />
        <Route path="/wall" element={<Wall />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;