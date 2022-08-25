import React, { useState } from "React";
import { Button, Table } from "reactstrap";
import ConfirmDialog from "./confirmDialog";
import axios from "axios";

const deleteProductFromOrder = async (id) => {
  return axios.put(
    `localhost:8080/api/products_connect_orders?order_id=${order_id}&product_id=${id}`,
    { order_quantity: 0 }
  );
};
const getOrderDetails = async (id) => {
  const [orderInfo, setOrderInfo] = useState(null);

  axios
    .get(`localhost:8080/api/products_connect_orders?order_id=${id}`)
    .then((result) => {});
};

const TableDisplay = ({ products }) => {
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
                <ConfirmDialog id={product.id} deleteItem={(id) => alert(id)} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

const ProductTable = ({ products }) => {
  return products === [] ? (
    <p style={{ textAlign: "center", fontStyle: "italic" }}>No products</p>
  ) : (
    <div style={{ height: "400px", overflowY: "scroll" }}>
      <TableDisplay products={products} />
    </div>
  );
};
