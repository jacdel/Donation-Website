import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import "./App.css";
import Home from "./components/Home";
import Products from "./components/products/Products";
import AboutUs from "./components/AboutUs";

import AddProduct from "./components/products/AddProduct";
import ProductDisplay from "./components/products/ProductDisplay";
import ListProducts from "./components/products/ListProducts";

function App() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/AboutUs">About us</Nav.Link>
            <Nav.Link href="/products">Donate!</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="AboutUs" element={<AboutUs/>} />
        <Route path="products" element={<Products />}>
           <Route path="list" element={<ListProducts />} />
          <Route path="add" element={<AddProduct />} />
          <Route path=":id" element={<ProductDisplay />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
