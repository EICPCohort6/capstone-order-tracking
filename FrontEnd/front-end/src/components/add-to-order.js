import React, { useState } from "react";
import { Row, Form, Col, FormGroup, Label, Input, Button } from "reactstrap";
import ProductTableDisplay from "../components/productTable";
import ProductSearch from "../components/productSearch";
import Search from "../components/productSearch";
import ProductsPage from "../pages/productsPage";
import axios from "axios";

const template = {
  product_SKU: "",
  product_image_url: "",
  product_name: "",
  product_price: "",
  product_quantity: "",
  product_description: "",
  product_id: "",
};

const submitForm = (e, data, toggle, productFunction) => {
  e.preventDefault();
  productFunction(data);
  toggle();
};

const getData = async ({ condition, text }) => {
  // does api call gets data
  let product;
  console.log(condition);
  switch (condition) {
    case "SKU":
      product = await axios.get(
        `http://localhost:8080/api/products?product_SKU=${text}`
      );
      return product;
    case "Product ID":
      product = await axios.get(
        `http://localhost:8080/api/products?product_id=${text}`
      );
      return product;
    case "Product Name":
      product = await axios.get(
        `http://localhost:8080/api/products?product_name=${text}`
      );
      return product;

    default:
      alert("No condition selected!");
      return "empty";
  }
};

const ProductsSearchForm = () => {
  const [tableData, setTableData] = useState("empty");
  return (
    <>
      <ProductSearch getData={getData} setTableData={setTableData} />
      <ProductTableDisplay tableData={tableData} />
    </>
  );
};

const ProductsToOrderForm = ({
  product = { ...template },
  toggle,
  productFunction,
}) => {
  product = { ...template, ...product };
  const [data, setData] = useState(product);

  return (
    <Form onSubmit={(e) => submitForm(e, data, toggle, productFunction)}>
      <Row>
        <Col>
          <FormGroup>
            <ProductsSearchForm />
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
};

export default ProductsToOrderForm;
