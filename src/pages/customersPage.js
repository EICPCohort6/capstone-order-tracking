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
        `https://capstone-csr-api.azurewebsites.net/api/customers?last_name=${text}`
      );
      console.log(customer);
      return customer;

    default:
      alert("No condition selected!");
      return "empty";
  }
};
const createNewCustomer = async (person) => {
  axios.post(`https://capstone-csr-api.azurewebsites.net/api/customers`, person).then((result) => {
    alert("Customer added!");
    window.location.reload();
  });
};

const CustomerPage = () => {
  const [tableData, setTableData] = useState("empty");

  // Deletes a entry from the table
  const deleteItem = async (id) => {
    await axios.delete(`https://capstone-csr-api.azurewebsites.net/api/customers/${id}`).then(() => {
      const newTable = tableData.filter(
        (row) => row.displayData.customer_id !== id
      );
      setTableData(newTable);
    });
  };

  const updateItem = async (item) => {
    await axios
      .put(`https://capstone-csr-api.azurewebsites.net/api/customers/${item.customer_id}`, item)
      .then(() => {
        const newTable = tableData.map((row) => {
          if (row.displayData.customer_id !== item.customer_id) return row;
          const newDisplayData = {
            customer_id: item.customer_id,
            first_name: item.first_name,
            middle_name: item.middle_name,
            last_name: item.last_name,
            phone_number: item.phone_number,
            email: item.email,
            country: item.country,
            city: item.city,
          };
          return { displayData: newDisplayData, fullData: item };
        });
        setTableData(newTable);
      });
  };

  return (
    <>
      <CustomerSearch getData={getData} setTableData={setTableData} />
      <AddCustomerButton customerFunction={createNewCustomer} />
      <CustomerTableDisplay
        tableData={tableData}
        deleteItem={deleteItem}
        updateItem={updateItem}
      />
    </>
  );
};

export default CustomerPage;
