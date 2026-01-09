import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import KurikulumPublik from "./pages/KurikulumPublik";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/kurikulum" element={<KurikulumPublik />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
