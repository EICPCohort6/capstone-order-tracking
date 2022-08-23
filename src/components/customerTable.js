import React from "react";
import { Table } from "reactstrap";

const TABLE_HEADERS = [
  "ID",
  "SKU",
  "Price",
  "Product Name",
  "Quantity",
  "Description",
];

const ProductTable = (props) => {
  const { tableData } = props;

  const mappedHeaders = TABLE_HEADERS.map((header, index) => {
    return <th key={index}>{header}</th>;
  });
  const mappedRows = tableData.map((product, index) => {
    return (
      <tr key={index}>
        <th scope="row">{product.id}</th>
        {Object.entries(product).map(
          ([key, value]) => key !== "id" && <td key={key}>{value}</td>
        )}
      </tr>
    );
  });

  return (
    <Table striped>
      <thead>
        <tr>{mappedHeaders}</tr>
      </thead>
      <tbody>{mappedRows}</tbody>
    </Table>
  );
};

const ProductTableDisplay = (props) => {
  const { tableData } = props;
  return tableData === "empty" ? (
    <p style={{ textAlign: "center", fontStyle: "italic" }}>Empty</p>
  ) : (
    <ProductTable tableData={tableData} />
  );
};

export default ProductTableDisplay;
