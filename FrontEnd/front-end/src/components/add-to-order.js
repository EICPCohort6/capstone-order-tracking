import React, { useState } from "react";
import { Row, Col, FormGroup } from "reactstrap";
import ProductSearch from "../components/addProductSearch";
import AddProductTableDisplay from "./addProductTable";
import axios from "axios";
import URL from "../API";

const getData = async ({ condition, text }) => {
  // does api call gets data
  let product;
  console.log(condition);
  switch (condition) {
    case "SKU":
      product = await axios.get(`${URL}/api/products?product_SKU=${text}`);
      return product;
    case "Product ID":
      product = await axios.get(`${URL}/api/products?product_id=${text}`);
      return product;
    case "Product Name":
      product = await axios.get(`${URL}/api/products?product_name=${text}`);
      return product;

    default:
      alert("No condition selected!");
      return "empty";
  }
};

const ProductsSearchForm = ({ updateFunction }) => {
  const [tableData, setTableData] = useState("empty");
  return (
    <>
      <ProductSearch getData={getData} setTableData={setTableData} />
      <AddProductTableDisplay
        tableData={tableData}
        updateItem={updateFunction}
      />
    </>
  );
};

const ProductsToOrderForm = ({ updateFunction }) => {
  return (
    <Row>
      <Col>
        <FormGroup>
          <ProductsSearchForm updateFunction={updateFunction} />
        </FormGroup>
      </Col>
    </Row>
  );
};

export default ProductsToOrderForm;
