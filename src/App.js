import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Offers from "./Offers";

function App() {
  return (
    <div className="App">
      <Header/>
      <main style={{marginTop: "56px", marginBottom: "96px"}}>
        <BrowserRouter>
              <Routes>
                  <Route index element={<Home />} />
                  <Route path="offers" element={<Offers />} />
              </Routes>
          </BrowserRouter>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
