import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeaderImage from "../HeaderImage.png";

function AboutUs() {
  return (
    <Container
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ border: "3px solid gray", borderRadius: "20px" }}
    >
      <div className="my-5">
        <img src={HeaderImage} alt="Header" />
      </div>
      <div className="text-center">
        <h1>About Us</h1>
        <p>
          Welcome to our refurbished goods store! We are passionate about
          reducing the amount of waste in landfills by giving new life to items
          that still have value. By refurbishing and reselling gently used
          products, we are doing our part to reduce waste and promote
          sustainable consumption. Our team of experts carefully inspects and
          restores each item to its original condition, ensuring that our
          customers receive high-quality products at a fraction of the cost of
          buying new. From electronics to furniture, we have a wide variety of
          products that are perfect for anyone looking to save money and reduce
          their impact on the environment. Thank you for supporting our mission
          to create a more sustainable future! Follow us on{" "}
          <a href="">Instagram</a> and <a href="">Facebook</a> for more
          updates.
        </p>
      </div>
    </Container>
  );
}

export default AboutUs;
