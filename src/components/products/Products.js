import React from "react";
import { Link, Outlet } from "react-router-dom"; 
import { ButtonGroup, Button } from "react-bootstrap";
import '../../App.css'


function Products() {
  return (
    <div>
<div className="p-3 mb-4 bg-info rounded border text-center">
  <p className="m-0">
    Looking to minimize landfill and give new life to your old tech? Consider donating to Save Earth
  </p>
</div>

      <div className="products">
        <div className="d-flex justify-content-center mb-4">
          <ButtonGroup>
            <Link to="/products/list">
              <Button variant="primary">Available now</Button>
            </Link>
            <Link to="/products/add">
              <Button variant="primary">Donate</Button>
            </Link>
          </ButtonGroup>
        </div>

        <Outlet /> 
      
      </div>
    </div>
  );
} //outlet renders the child routes of the "/products" route

export default Products;
