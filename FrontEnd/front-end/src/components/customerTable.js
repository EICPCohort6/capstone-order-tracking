import React from "react";
import { Button, Table } from "reactstrap";
import ConfirmDialog from "./confirmDialog";
import AddCustomerButton from "./add-customer-button";

const TABLE_HEADERS = [
  "ID",
  "First Name",
  "Middle Name",
  "Last Name",
  "Phone Number",
  "Email",
  "Country",
  "City",
];

const CustomerTable = (props) => {
  const { tableData, deleteItem, updateItem } = props;

  const mappedHeaders = TABLE_HEADERS.map((header, index) => {
    return <th key={index}>{header}</th>;
  });
  const mappedRows = tableData.map((person, index) => {
    return (
      <tr key={index}>
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
      </tr>
    );
  });

  return (
    <Table striped responsive>
      <thead>
        <tr>{mappedHeaders}</tr>
      </thead>
      <tbody>{mappedRows}</tbody>
    </Table>
  );
};

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
  );
};

export default CustomerTableDisplay;
