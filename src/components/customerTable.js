import React from "react";
<<<<<<< HEAD
import { Table } from "reactstrap";
=======
import { Button, Table } from "reactstrap";
import ConfirmDialog from "./confirmDialog";
import AddCustomerButton from "./add-customer-button";
>>>>>>> 8a62cf4b46a51d486a00c66ac2e4a3fecdecef8f

const TABLE_HEADERS = [
  "ID",
  "SKU",
  "Price",
  "Product Name",
  "Quantity",
  "Description",
];

<<<<<<< HEAD
const ProductTable = (props) => {
  const { tableData } = props;
=======

const CustomerTable = (props) => {
  const { tableData, deleteItem, updateItem } = props;
>>>>>>> 8a62cf4b46a51d486a00c66ac2e4a3fecdecef8f

  const mappedHeaders = TABLE_HEADERS.map((header, index) => {
    return <th key={index}>{header}</th>;
  });
  const mappedRows = tableData.map((product, index) => {
    return (
      <tr key={index}>
<<<<<<< HEAD
        <th scope="row">{product.id}</th>
        {Object.entries(product).map(
          ([key, value]) => key !== "id" && <td key={key}>{value}</td>
        )}
=======
        <th scope="row">{person.displayData.customer_id}</th>
        {Object.entries(person.displayData).map(
          ([key, value]) => key !== "customer_id" && <td key={key}>{value}</td>
        )}
        <td>
          <Button>+</Button>
        </td>
        <td>
          <AddCustomerButton
            text="Edit"
            person={person.fullData}
            customerFunction={updateItem}
          />
        </td>
        <td>
          <ConfirmDialog
            deleteItem={deleteItem}
            id={person.fullData.customer_id}
          />
        </td>
>>>>>>> 8a62cf4b46a51d486a00c66ac2e4a3fecdecef8f
      </tr>
    );
  });

  return (
<<<<<<< HEAD
    <Table striped>
=======
    <Table striped responsive>
>>>>>>> 8a62cf4b46a51d486a00c66ac2e4a3fecdecef8f
      <thead>
        <tr>{mappedHeaders}</tr>
      </thead>
      <tbody>{mappedRows}</tbody>
    </Table>
  );
};

<<<<<<< HEAD
const ProductTableDisplay = (props) => {
  const { tableData } = props;
  return tableData === "empty" ? (
    <p style={{ textAlign: "center", fontStyle: "italic" }}>Empty</p>
  ) : (
    <ProductTable tableData={tableData} />
=======
const CustomerTableDisplay = (props) => {
  const { tableData, deleteItem, updateItem } = props;

  return tableData === "empty" ? (
    <p style={{ textAlign: "center", fontStyle: "italic" }}>Empty</p>
  ) : (
    <div style={{ height: "800px", overflowY: "scroll" }}>
      <CustomerTable
        tableData={tableData}
        deleteItem={deleteItem}
        updateItem={updateItem}
      />
    </div>
>>>>>>> 8a62cf4b46a51d486a00c66ac2e4a3fecdecef8f
  );
};

export default ProductTableDisplay;
