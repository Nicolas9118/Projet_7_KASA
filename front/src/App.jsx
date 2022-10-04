import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import HousingSheet from "./pages/HousingSheet/HousingSheet";
// import jsonData from '../../data.json';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route path="/housingSheet/:id" element={<HousingSheet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
