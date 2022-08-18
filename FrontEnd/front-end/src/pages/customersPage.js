import React, { useState } from "react";
import CustomerSearch from "../components/customerSearch";
import CustomerTableDisplay from "../components/customerTable";
import axios from "axios";

const getData = async ({ condition, text }) => {
  // does api call gets data
  const customers = await axios.get("https://localhost:8080/api/customers");
  return customers;
};
const CustomerPage = () => {
  const [tableData, setTableData] = useState("empty");
  return (
    <>
      <CustomerSearch getData={getData} setTableData={setTableData} />
      <CustomerTableDisplay tableData={tableData} />
    </>
  );
};

export default CustomerPage;
