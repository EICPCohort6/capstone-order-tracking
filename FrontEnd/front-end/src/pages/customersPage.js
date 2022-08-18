import React, { useState } from "react";
import CustomerSearch from "../components/customerSearch";
import CustomerTableDisplay from "../components/customerTable";
import AddCustomerButton from "../components/add-customer-button";

const getData = async ({ condition, text }) => {
  // does api call gets data
};
const CustomerPage = () => {
  const [tableData, setTableData] = useState("empty");
  return (
    <>
      <CustomerSearch getData={getData} setTableData={setTableData} />
      <AddCustomerButton />
      <CustomerTableDisplay tableData={tableData} />
    </>
  );
};

export default CustomerPage;
