import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

import Layout from "../pages/Layout/Layout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import HousingSheet from "../pages/HousingSheet/HousingSheet";
import Error from "../pages/Error404/Error404";

function Adresse() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/housingSheet/:id" element={<HousingSheet />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default Adresse;
