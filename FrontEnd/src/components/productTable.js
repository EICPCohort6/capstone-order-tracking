import React from "react";
import { Table } from "reactstrap";
import EditProductButton from "./edit-product-button";

const TABLE_HEADERS = [
  "ID",
  "Image URL",
  "SKU",
  "Product Name",
  "Price",
  "Quantity",
  "Description",
];

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
          <EditProductButton
            text="Edit"
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

const ProductTableDisplay = (props) => {
  const { tableData, deleteItem, updateItem } = props;

  return tableData === "empty" ? (
    <p style={{ textAlign: "center", fontStyle: "italic" }}>Empty</p>
  ) : (
    <div style={{ height: "800px", overflowY: "scroll" }}>
      <ProductTable
        tableData={tableData}
        deleteItem={deleteItem}
        updateItem={updateItem}
      />
    </div>
  );
};

export default ProductTableDisplay;
