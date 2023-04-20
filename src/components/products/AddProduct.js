import React, { useState } from "react";
import { Button, Table, Form } from "react-bootstrap";
import '../../App.css'


function AddProduct() {
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [condition, setCondition] = useState("");
  const [productList, setProductList] = useState([]);


  // creates a new product object and adds it to the existing list of products
  const handleSubmit = (e) => {
    e.preventDefault();//prevent page refreshing
    // create a new product 
    const newProduct = { itemName, description, condition }; //creates a new product object using the itemName, description, and condition values from the state
    // add the new product to the existing list of products
    setProductList([...productList, newProduct]); // using the spread operator to creat a copy of the array, then new product object is added to the end of this 
    // then clears the input fields
    setItemName("");
    setDescription("");
    setCondition("");
  };
//It populates the input fields with the data of the product to be edited, 
//and then removes it from the list of products.
  const handleEdit = (index) => {
    const product = productList[index];
    setItemName(product.itemName);
    setDescription(product.description);
    setCondition(product.condition);
    // remove the product from the list
    const updatedList = [...productList];
    updatedList.splice(index, 1); //splice is used to remove the selected product from the updatedList of products
    setProductList(updatedList);
  };

  const handleDelete = (index) => { //takes an index argument representing the index of the product to be deleted
    const updatedList = [...productList]; //using the spread operator to create a copy of the productList array 
    updatedList.splice(index, 1); //removes the product at the specified index and modifies the array in place
    setProductList(updatedList); //the count is set to 1 to remove just one element
  };

  return (
    <div className="listOfProducts">
      <h1>Submit Donation Item for Review</h1>
      <div className="form-container">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="itemName">
            <Form.Label>Item Name:</Form.Label>
            <Form.Control
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="condition">
            <Form.Label>Condition:</Form.Label>
            <Form.Control
              as="select"
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
            >
              <option value="">Select condition</option>
              <option value="new">New</option>
              <option value="used">Used</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Add Product
          </Button>
        </Form>
      </div>
      <h2>Items to be Processed and Reviewed</h2>
      <div className="table-container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Description</th>
              <th>Condition</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {productList.map((product, index) => (
              <tr key={index}>
                <td>{product.itemName}</td>
                <td>{product.description}</td>
                <td>{product.condition}</td>
                <td>
                  <Button variant="warning" onClick={() => handleEdit(index)}>
                    Edit
                  </Button>
                  <Button variant="danger" onClick={() => handleDelete(index)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
  
}

export default AddProduct;
