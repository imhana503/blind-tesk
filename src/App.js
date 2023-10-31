import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Landing from './pages/Landing';
import Home from './pages/Home';
import Product from './pages/Product';
import Join from './pages/Join';

   
function App() {
  return (
    <BrowserRouter>      
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/home" element={<Product/>}/>
        <Route path="/join" element={<Join/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
