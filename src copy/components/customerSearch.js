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
    firstName: "John",
    middleName: "-",
    lastName: "Bob",
    phoneNumber: "12312435245",
    email: "john@bob.com",
  },
  {
    id: 1,
    firstName: "Josh",
    middleName: "Middle",
    lastName: "Something",
    phoneNumber: "23443543634",
    email: "Josh@bob.com",
  },
  {
    id: 2,
    firstName: "Ryan",
    middleName: "Simba",
    lastName: "Last",
    phoneNumber: "12125636345345",
    email: "Ryan@bob.com",
  },
  {
    id: 3,
    firstName: "Kat",
    middleName: "-",
    lastName: "Someone",
    phoneNumber: "1231245345",
    email: "john@bob.com",
  },
];

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
const apiCall = (getData, setTableData) => {
  //getData.then( settabledata)
  setTableData(DUMMY_TABLE_DATA);
};
const Search = (props) => {
  const { getData, setTableData } = props;
  const [searchCondition, setSearchCondition] = useState("Last Name");

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
