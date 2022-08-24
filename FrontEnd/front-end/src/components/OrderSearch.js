
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

const SEARCH_OPTIONS = [
  "Customer Id",
  "Order Id",
  "Order Status Code",
  "Total Order Price",
  "Order Notes",
  "Timestamp"
];

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
  console.log(getData, setTableData, searchCondition, text)
  console.log(info)
//   getData(info).then((result) => {
//     if (result === "empty" || result.data.length === 0) {
//       setTableData("empty");
//       return;
//     }
//     const tableData = result.data.map((entry) => {
//       return {
//         id: entry.customer_id,
//         firstName: entry.first_name,
//         middleName: entry.middle_name,
//         lastName: entry.last_name,
//         phone: entry.phone_number,
//         email: entry.email,
//         country: entry.country,
//         city: entry.city,
//       };
//     });
//     setTableData(tableData);
//   });
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
