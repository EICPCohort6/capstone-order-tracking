import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import ConfirmDialog from "./confirmDialog";
import axios from "axios";

const TableDisplay = ({ products, deleteItem }) => {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          return (
            <tr key={product.id}>
              <th scrop="row">{product.id}</th>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>
                <ConfirmDialog id={product.id} deleteItem={deleteItem} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

const ProductTable = ({
  products,
  getOrderDetails,
  orderId,
  deleteProductFromOrder,
}) => {
  useEffect(() => {
    getOrderDetails(orderId);
  }, []);

  return products === [] ? (
    <p style={{ textAlign: "center", fontStyle: "italic" }}>No products</p>
  ) : (
    <div style={{ height: "400px", overflowY: "scroll" }}>
      <TableDisplay products={products} deleteItem={deleteProductFromOrder} />
    </div>
  );
};

export default ProductTable;
