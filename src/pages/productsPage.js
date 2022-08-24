import React, { useState } from "react";
import ProductTableDisplay from "../components/productTable";
import ProductSearch from "../components/productSearch";
import AddProductButton from "../components/add-product-button";

const getData = async ({ condition, text }) => {
  // does api call gets data
};
const ProductsPage = () => {
  const [tableData, setTableData] = useState("empty");
  return (
    <>
      <ProductSearch getData={getData} setTableData={setTableData} />
      <AddProductButton />
      <ProductTableDisplay tableData={tableData} />
    </>
  );
};

export default ProductsPage;
