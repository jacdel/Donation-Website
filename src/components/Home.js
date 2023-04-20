import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ProductsData } from "../ProductsData";
import "../App.css";

function ProductsList() {
  const [activeProductId, setActiveProductId] = useState(null);

  const toggleProductDescription = (productId) => {
    setActiveProductId(activeProductId === productId ? null : productId);
  };

  return (
    <div>
      <Container className="header-stuff">
        <h3>welcome to Save Earth</h3>
        <h4>Your new online non-profit Thrift store</h4>
        <p>Help save the planet by reducing landfill with our sustainable solutions.</p>
      </Container>

      <Container className="rounded">
        <h1>Looking to serve the next person</h1>

        <Container className="pds">
          <Row>
            {ProductsData.map((product) => (
              <Col key={product.id} sm={12} md={6} lg={4}>
                <div className="productDisplay rounded border p-3">
                  <h3>{product.name}</h3>
                  <p>${product.price}</p>
                  {activeProductId === product.id && <p>{product.description}</p>}
                  <button
                    className="btn btn-primary"
                    onClick={() => toggleProductDescription(product.id)}
                  >
                    {activeProductId === product.id ? "Hide Details" : "View Details"}
                  </button>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default ProductsList;
