import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
// Pages routes


import ProductItem from './components/products/ProductItem';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Products from './pages/Products';

function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/products' element={<Products />} />
          <Route path='/product' element={<ProductItem />} >
            <Route path=':id' element={<ProductItem />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
