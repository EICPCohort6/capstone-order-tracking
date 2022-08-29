import React, { useState } from "react";
import CustomerSearch from "../components/customerSearch";
import CustomerTableDisplay from "../components/customerTable";
import axios from "axios";
import AddCustomerButton from "../components/add-customer-button";
import apiURL from "../API";


const getData = async ({ condition, text }) => {
  // does api call gets data
  console.log(condition);
  let customer;
  switch (condition) {
    case "Last Name":
      customer = await axios.get(`${apiURL}/api/customers?last_name=${text}`);
      return customer;
    case "First Name":
      customer = await axios.get(`${apiURL}/api/customers?first_name=${text}`);
      return customer;
    case "ID":
      customer = await axios.get(`${apiURL}/api/customers/${text}`);
      return customer;
    case "Phone Number":
      customer = await axios.get(
        `${apiURL}/api/customers?phone_number=${text}`
      );
      return customer;
    case "Email":
      customer = await axios.get(`${apiURL}/api/customers?email=${text}`);

      return customer;

    default:
      customer = await axios.get(`${apiURL}/api/customers`);
      return customer;
  }
};
const createNewCustomer = async (person) => {
  axios
    .post(`${apiURL}/api/customers`, person)
    .then((result) => {
      alert("Customer added!");
      window.location.reload();
    })
    .catch((error) => {
      console.log(error);
      alert("Failed to add Customer!");
    });

};

const CustomerPage = () => {
  const [tableData, setTableData] = useState("empty");

  // Deletes a entry from the table
  const deleteItem = async (id) => {
    await axios
      .delete(`${apiURL}/api/customers/${id}`)
      .then(() => {
        const newTable = tableData.filter(
          (row) => row.displayData.customer_id !== id
        );
        setTableData(newTable);
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to delete item!");
      });

  };

  const updateItem = async (item) => {
    await axios
      .put(`${apiURL}/api/customers/${item.customer_id}`, item)

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
