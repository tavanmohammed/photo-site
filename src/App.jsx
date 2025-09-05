import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Gallery from "./pages/GalleryPage"
import Album from "./pages/Album";
import FAQPage from "./pages/Faq";
import AboutPage from "./pages/About";
import ServicePage from "./pages/service";


function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/albums/:albumId" element={<Album />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />


      </Routes>
    </Router>
  );
}

export default App;
