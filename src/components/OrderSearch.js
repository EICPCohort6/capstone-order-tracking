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

const SEARCH_OPTIONS = ["Customer Id", "Order Id", "Order Status Code"];

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

  getData(info)
    .then((result) => {
      if (result === "empty" || result.data.length === 0) {
        setTableData([]);
        return;
      }
      let resultData = result.data;
      if (!Array.isArray(resultData)) resultData = [{ ...resultData }];
      setTableData(resultData);
    })
    .catch((error) => {
      if (error.response.status === 404) alert("Unable to find Order");
      else alert("Error!");
    });
};
const OrderSearch = (props) => {
  const { getData, setTableData } = props;
  const [searchCondition, setSearchCondition] = useState("Order Id");
  const [text, setText] = useState("");

  return (
    <form
      onSubmit={(event) =>
        apiCall(event, getData, setTableData, searchCondition, text)
      }
    >
      <InputGroup>
        <Input
          placeholder="Search Orders"
          onChange={(event) => setText(event.target.value)}
          value={text}
        />
        <DropDownSelected
          searchCondition={searchCondition}
          setSearchCondition={setSearchCondition}
        />
        <Button type="submit">Search</Button>
      </InputGroup>
    </form>
  );
};
export default OrderSearch;
