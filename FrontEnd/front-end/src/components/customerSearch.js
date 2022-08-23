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
  "Last Name",
  "First Name",
  "ID",
  "Phone Number",
  "Email",
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
  const [searchCondition, setSearchCondition] = useState("Last Name");
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