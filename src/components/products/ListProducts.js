import React from "react";
import { ProductsData } from "../../ProductsData";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";



function ListProducts() {
  const navigate = useNavigate();

  return (
    <div className="listOfProducts">
      <Row>
        {ProductsData.map((product) => ( // uses the array in the productsdata.js file
          <Col sm={12} md={6} lg={4} key={product.id}>
            <div className="productDisplay rounded border p-3">
              <h1>{product.name}</h1>
              <p>{product.description}</p>
              
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ListProducts;
