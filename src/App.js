import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Landing from './pages/Landing';
// import Home from './pages/Home';
// import Product from './pages/Product';
// import Login from './pages/Login';
// import Join from './pages/Join';

   
function App() {
  return (
    <>
      <div id="skipNavigation">
          <a href="#content">본문 바로가기</a>
      </div>

     
      <main id="container">
          <div id="content" class="content">
          <BrowserRouter>      
            <Routes>
              <Route path="/" element={<Landing/>}/>
              {/* <Route path="/login" element={<Login/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/home" element={<Product/>}/>
              <Route path="/join" element={<Join/>}/> */}
            </Routes>
          </BrowserRouter>
          </div>
      </main>
      
    </>
    
  );
}

export default App;
