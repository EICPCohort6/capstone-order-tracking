import React, { useState } from "react";
import {
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  InputGroup,
  UncontrolledDropdown,
} from "reactstrap";

const DUMMY_TABLE_DATA = [
  {
    id: 0,
    productSku: "123ABC",
    productPrice: "9.99",
    productName: "Red Shirt",
    productQuantity: "100",
    productDescription: "A red shirt",
  },
  {
    id: 1,
    productSku: "456XYZ",
    productPrice: "12.99",
    productName: "Blue Shirt",
    productQuantity: "123",
    productDescription: "A blue shirt",
  },
  {
    id: 2,
    productSku: "789QWE",
    productPrice: "5.00",
    productName: "Green Shirt",
    productQuantity: "345",
    productDescription: "A green shirt",
  },
  {
    id: 3,
    productSku: "000JKL",
    productPrice: "1000.00",
    productName: "Gold Shirt",
    productQuantity: "1",
    productDescription: "An expensive gold shirt",
  },
];

const SEARCH_OPTIONS = ["Product ID", "SKU", "Product Name"];

const DropDownSelected = (props) => {
  const { setSearchCondition, searchCondition } = props;

  const mapDropDownItems = SEARCH_OPTIONS.map((option, index) => {
    return (
      <DropdownItem key={index} onClick={() => setSearchCondition(option)}>
        {option}
      </DropdownItem>
    );
  });
  return (
    <UncontrolledDropdown>
      <DropdownToggle caret style={{ minWidth: "20%" }}>
        {searchCondition}
      </DropdownToggle>
      <DropdownMenu>{mapDropDownItems}</DropdownMenu>
    </UncontrolledDropdown>
  );
};
const apiCall = (event, getData, setTableData, searchCondition, text) => {
  event.preventDefault();
  const info = { condition: searchCondition, text: text };
  getData(info).then((result) => {
    if (result === "empty" || result.data.length === 0) {
      setTableData("empty");
      return;
    }
    const tableData = result.data.map((entry) => {
      return {
        displayData: {
          customer_id: entry.customer_id,
          first_name: entry.first_name,
          middle_name: entry.middle_name,
          last_name: entry.last_name,
          phone_number: entry.phone_number,
          email: entry.email,
          country: entry.country,
          city: entry.city,
        },
        fullData: entry,
      };
    });
    setTableData(tableData);
  });
};
const Search = (props) => {
  const { getData, setTableData } = props;
  const [searchCondition, setSearchCondition] = useState("SKU");

  return (
    <form>
      <InputGroup>
        <Input placeholder="Search" />
        <DropDownSelected
          searchCondition={searchCondition}
          setSearchCondition={setSearchCondition}
        />
        <Button onClick={() => apiCall(getData, setTableData)}>Search</Button>
      </InputGroup>
    </form>
  );
};
export default Search;
