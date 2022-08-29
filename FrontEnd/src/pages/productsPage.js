import React, { useState } from "react";
import ProductTableDisplay from "../components/productTable";
import ProductSearch from "../components/productSearch";
import axios from "axios";
import apiURL from "../API";
const getData = async ({ condition, text }) => {
  // does api call gets data
  let product;
  switch (condition) {
    case "SKU":
      product = await axios.get(`${apiURL}/api/products?product_SKU=${text}`);
      return product;
    case "Product ID":
      product = await axios.get(`${apiURL}/api/products?product_id=${text}`);
      return product;
    case "Product Name":
      product = await axios.get(`${apiURL}/api/products?product_name=${text}`);
      return product;

    default:
      product = await axios.get(`${apiURL}/api/products`);
      return product;
  }
};
const ProductsPage = () => {
  const [tableData, setTableData] = useState("empty");

  // Deletes a entry from the table
  const deleteItem = async (id) => {
    await axios.delete(`${apiURL}/api/products/${id}`).then(() => {
      const newTable = tableData.filter(
        (row) => row.displayData.product_id !== id
      );
      setTableData(newTable);
    });
  };

  const updateItem = async (item) => {
    await axios
      .put(`${apiURL}/api/products/${item.product_id}`, item)
      .then(() => {
        const newTable = tableData.map((row) => {
          if (row.displayData.product_id !== item.product_id) return row;
          const newDisplayData = {
            product_id: item.product_id,
            product_image_url: item.product_image_url,
            product_SKU: item.product_SKU,
            product_name: item.product_name,
            product_price: item.product_price,
            product_quantity: item.product_quantity,
            product_description: item.product_description,
          };
          return { displayData: newDisplayData, fullData: item };
        });
        setTableData(newTable);
      });
  };

  return (
    <>
      <ProductSearch getData={getData} setTableData={setTableData} />
      <ProductTableDisplay
        tableData={tableData}
        deleteItem={deleteItem}
        updateItem={updateItem}
      />
    </>
  );
};

export default ProductsPage;
