import React from "react";
import { Table } from "reactstrap";

const TABLE_HEADERS = [
  "ID",
  "First Name",
  "Middle Name",
  "Last Name",
  "Phone Number",
  "Email",
];

const CustomerTable = (props) => {
  const { tableData } = props;

  const mappedHeaders = TABLE_HEADERS.map((header, index) => {
    return <th key={index}>{header}</th>;
  });
  const mappedRows = tableData.map((person, index) => {
    return (
      <tr key={index}>
        <th scope="row">{person.id}</th>
        {Object.entries(person).map(
          ([key, value]) => key !== "id" && <td key={key}>{value}</td>
        )}
      </tr>
    );
  });

  return (
    <Table striped>
      <thead>
        <tr>{mappedHeaders}</tr>
      </thead>
      <tbody>{mappedRows}</tbody>
    </Table>
  );
};

const CustomerTableDisplay = (props) => {
  const { tableData } = props;
  return tableData === "empty" ? (
    <p style={{ textAlign: "center", fontStyle: "italic" }}>Empty</p>
  ) : (
    <CustomerTable tableData={tableData} />
  );
};

export default CustomerTableDisplay;
