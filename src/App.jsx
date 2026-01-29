import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import WhyChooseUS from "./Pages/WhyChooseUS";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whychooseus" element={<WhyChooseUS />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;