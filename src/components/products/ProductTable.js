import React from "react";

function ProductTable({ products, onEdit, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Item Name</th>
          <th>Description</th>
          <th>Condition</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.itemName}</td>
            <td>{product.description}</td>
            <td>{product.condition}</td>
            <td>
              <button onClick={() => onEdit(product)}>Edit</button>
            </td>
            <td>
              <button onClick={() => onDelete(product)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
