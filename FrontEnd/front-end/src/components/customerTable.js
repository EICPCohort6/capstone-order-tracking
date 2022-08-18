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
const DUMMY_TABLE_DATA = [
  {
    id: 0,
    firstName: "John",
    middleName: "-",
    lastName: "Bob",
    phoneNumber: "12312435245",
    email: "john@bob.com",
  },
  {
    id: 1,
    firstName: "Josh",
    middleName: "Middle",
    lastName: "Something",
    phoneNumber: "23443543634",
    email: "Josh@bob.com",
  },
  {
    id: 2,
    firstName: "Ryan",
    middleName: "Simba",
    lastName: "Last",
    phoneNumber: "12125636345345",
    email: "Ryan@bob.com",
  },
  {
    id: 3,
    firstName: "Kat",
    middleName: "-",
    lastName: "Someone",
    phoneNumber: "1231245345",
    email: "john@bob.com",
  },
];

const CustomerTable = (props) => {
  const mappedHeaders = TABLE_HEADERS.map((header, index) => {
    return <th key={index}>{header}</th>;
  });
  const mappedRows = DUMMY_TABLE_DATA.map((person, index) => {
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

export default CustomerTable;
