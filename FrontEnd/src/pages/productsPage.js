import React, { useState } from "react";
import ProductTableDisplay from "../components/productTable";
import ProductSearch from "../components/productSearch";
<<<<<<< HEAD
=======
import AddProductButton from "../components/add-product-button";
>>>>>>> 8a62cf4b46a51d486a00c66ac2e4a3fecdecef8f

const getData = async ({ condition, text }) => {
  // does api call gets data
};
const ProductsPage = () => {
  const [tableData, setTableData] = useState("empty");
  return (
    <>
      <ProductSearch getData={getData} setTableData={setTableData} />
<<<<<<< HEAD
=======
      <AddProductButton />
>>>>>>> 8a62cf4b46a51d486a00c66ac2e4a3fecdecef8f
      <ProductTableDisplay tableData={tableData} />
    </>
  );
};

export default ProductsPage;
