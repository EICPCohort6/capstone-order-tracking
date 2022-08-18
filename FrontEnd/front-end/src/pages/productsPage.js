import React, { useState } from "react";
import ProductTableDisplay from "../components/productTable";
import ProductSearch from "../components/productSearch";

const getData = async ({ condition, text }) => {
  // does api call gets data
};
const ProductsPage = () => {
  const [tableData, setTableData] = useState("empty");
  return (
    <>
      <ProductSearch getData={getData} setTableData={setTableData} />
      <ProductTableDisplay tableData={tableData} />
    </>
  );
};

export default ProductsPage;
