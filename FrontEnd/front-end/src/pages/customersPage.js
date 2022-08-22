import React, { useState } from "react";
import CustomerSearch from "../components/customerSearch";
import CustomerTableDisplay from "../components/customerTable";
import axios from "axios";
import AddCustomerButton from "../components/add-customer-button";

const getData = async ({ condition, text }) => {
  // does api call gets data
  console.log(condition);
  switch (condition) {
    case "Last Name":
      const customer = await axios.get(
        `http://localhost:8080/api/customers?last_name=${text}`
      );
      return customer;
    default:
      alert("No condition selected!");
      return "empty";
  }
};

const CustomerPage = () => {
  const [tableData, setTableData] = useState("empty");

  // Deletes a entry from the table
  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:8080/api/customers/${id}`).then(() => {
      const newTable = tableData.filter((row) => row.id !== id);
      setTableData(newTable);
    });
  };

  return (
    <>
      <CustomerSearch getData={getData} setTableData={setTableData} />
      <AddCustomerButton />
      <CustomerTableDisplay tableData={tableData} deleteItem={deleteItem} />
    </>
  );
};

export default CustomerPage;
