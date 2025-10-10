import "./App.css";
import Nav from "./components/Nav";
import Skeleton from "./components/Skeleton";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AllSongs from "./components/AllSongs";
import { SongProvider } from "./context/songContext";
import Footer from "./components/Footer";


function App() {
  return (
    <SongProvider>
      <Router>
        <Nav />
        <div className="flex mt-20 flex-col justify-center lg:pl-20 overflow-y-hidden gap-10 lg:gap-0 lg:mt-0 lg:flex-row lg:h-[80%]" >
          <div className="lg:w-[30%] lg:mt-20">
            <Skeleton />
          </div>
          <div className="lg:w-[70%] md:mt-0 lg:h-[100%] lg:overflow-y-hidden">
            <Routes>
              <Route path="/" element={<AllSongs />} />
              <Route path="/songs" element={<Home />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </Router>
    </SongProvider>
  );
}

export default App;
