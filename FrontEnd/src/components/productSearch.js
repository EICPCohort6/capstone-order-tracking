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
  if (text === "") {
    alert("Search field cannot be empty");
    return;
  }

  getData(info).then((result) => {
    if (result === "empty" || result.data.length === 0) {
      setTableData("empty");
      return;
    }
    const tableData = result.data.map((entry) => {
      return {
        displayData: {
          product_id: entry.product_id,
          product_image_url: entry.product_image_url,
          product_SKU: entry.product_SKU,
          product_name: entry.product_name,
          product_price: entry.product_price,
          product_quantity: entry.product_quantity,
          product_description: entry.product_description,
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
  const [text, setText] = useState("");

  return (
    <form
      onSubmit={(event) =>
        apiCall(event, getData, setTableData, searchCondition, text)
      }
    >
      <InputGroup>
        <Input
          placeholder="Search"
          onChange={(event) => setText(event.target.value)}
          value={text}
        />
        <Button
          onClick={(event) => apiCall(event, getData, setTableData, "", "all")}
          color="success"
        >
          Display all
        </Button>
        <DropDownSelected
          searchCondition={searchCondition}
          setSearchCondition={setSearchCondition}
        />
        <Button type="submit">Search</Button>
      </InputGroup>
    </form>
  );
};
export default Search;
