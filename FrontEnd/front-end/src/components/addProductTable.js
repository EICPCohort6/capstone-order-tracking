import React from "react";
import { Table } from "reactstrap";
import AddProductButton from "./add-product-button";

const TABLE_HEADERS = ["ID", "SKU", "Product Name", "Price"];

const ProductTable = (props) => {
  const { tableData, updateItem } = props;

  const mappedHeaders = TABLE_HEADERS.map((header, index) => {
    return <th key={index}>{header}</th>;
  });
  const mappedRows = tableData.map((product, index) => {
    return (
      <tr key={index}>
        <th scope="row">{product.displayData.product_id}</th>
        {Object.entries(product.displayData).map(
          ([key, value]) => key !== "product_id" && <td key={key}>{value}</td>
        )}
        <td>
          <AddProductButton
            text="Add"
            product={product.fullData}
            productFunction={updateItem}
          />
        </td>
      </tr>
    );
  });

  return (
    <Table striped responsive>
      <thead>
        <tr>{mappedHeaders}</tr>
      </thead>
      <tbody>{mappedRows}</tbody>
    </Table>
  );
};

const AddProductTableDisplay = (props) => {
  const { tableData, updateItem } = props;

  return tableData === "empty" ? (
    <p style={{ textAlign: "center", fontStyle: "italic" }}>Empty</p>
  ) : (
    <div style={{ height: "600px", overflowY: "scroll" }}>
      <ProductTable tableData={tableData} updateItem={updateItem} />
    </div>
  );
};

export default AddProductTableDisplay;
