import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Index from "./pages/Index";
import Nopage from "./pages/Nopage";

function App() {


  return (
    <div className="h-auto w-screen ">
      <Navbar />
      <Routes>
        <Route index element={<Index />} />
        <Route plath="*" element={<Nopage />} />
      </Routes>
    </div>
  );
}

export default App;
