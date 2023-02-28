import React from "react";
import { Routes, Route} from "react-router-dom";
import Product from './Product'
import Svice from './Svice'
import Footers from './Footers'


function App() {
  
    return (
                <Routes className='container'>
                     <Route  path="/" element={<Product />} /> 
                     <Route  path="/Product" element={<Product />} /> 
                     <Route  path="/Svice" element={<Svice />} />
                     <Route  path="/Footers" element={<Footers />} /> 
                </Routes>
    );
}
  
export default App;