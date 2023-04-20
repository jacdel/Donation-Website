
import React, { useState } from "react";

function AddProduct() {
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [condition, setCondition] = useState("");
  const [productList, setProductList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // create a new product object
    const newProduct = { itemName, description, condition };
    // add the new product to the existing list of products
    setProductList([...productList, newProduct]);
    // clear the input fields
    setItemName("");
    setDescription("");
    setCondition("");
  };

  const handleEdit = (index) => {
    const product = productList[index];
    setItemName(product.itemName);
    setDescription(product.description);
    setCondition(product.condition);
    // remove the product from the list
    const updatedList = [...productList];
    updatedList.splice(index, 1);
    setProductList(updatedList);
  };

  const handleDelete = (index) => {
    const updatedList = [...productList];
    updatedList.splice(index, 1);
    setProductList(updatedList);
  };

  return (
    <div className="listOfProducts">
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Item Name:
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <label>
          Condition:
          <select value={condition} onChange={(e) => setCondition(e.target.value)}>
            <option value="">Select condition</option>
            <option value="new">New</option>
            <option value="used">Used</option>
          </select>
        </label>
        <br />
        <button type="submit">Add Product</button>
      </form>
      <h2>Product to be Processed and Reviewed</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Description</th>
            <th>Condition</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((product, index) => (
            <tr key={index}>
              <td>{product.itemName}</td>
              <td>{product.description}</td>
              <td>{product.condition}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AddProduct;
