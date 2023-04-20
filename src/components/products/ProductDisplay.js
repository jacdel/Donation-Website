import React from "react";
import { useParams } from "react-router-dom";
import { ProductsData } from "../../ProductsData";


//displays the name and description of the product based on the id from the Product Data array 
function ProductDisplay() {
  const { id } = useParams(); 
  return (
    <div className="listOfProducts">
      <div className="productDisplay">
        <h3>{ProductsData[id - 1].name}</h3>
        <p>{ProductsData[id - 1].description}</p>
      </div>
    </div>
  );
}
export default ProductDisplay