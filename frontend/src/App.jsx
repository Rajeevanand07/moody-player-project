import "./App.css";
import Nav from "./components/Nav";
import Skeleton from "./components/Skeleton";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AllSongs from "./components/AllSongs";
import { SongProvider } from "./context/songContext";
import Footer from "./components/Footer";
import Admin from "./components/Admin";


function App() {
  return (
    <SongProvider>
      <Router>
        <Nav />
        <div className="flex mt-20 flex-col justify-center px-5 gap-10 lg:gap-0 lg:mt-0 lg:flex-row" >
          <div className="lg:w-[30%] lg:mt-20 lg:min-h-[70vh]">
            <Skeleton />
          </div>
          <div className="lg:w-[70%] md:mt-0">
            <Routes>
              <Route path="/" element={<AllSongs />} />
              <Route path="/songs" element={<Home />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </Router>
    </SongProvider>
  );
}

export default App;
