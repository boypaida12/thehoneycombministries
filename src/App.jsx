import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import PackageDetails from "./pages/PackageDetails";
import Footer from "./components/footer/Footer";
import Ministry from "./pages/Ministry";

const handleLinkScroll = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home handleLinkScroll={handleLinkScroll}/>} />
        <Route path="/learn-more/package-details/:title" element={<PackageDetails />} />
        <Route path="/ministry" element={<Ministry />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer handleLinkScroll={handleLinkScroll}/>
    </>
  );
}

export default App;
