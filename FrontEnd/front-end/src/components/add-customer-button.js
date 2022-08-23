import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import CustomerForm from "./create-customer";

function AddCustomerButton({
  text = "Add New Customer",
  person,
  customerFunction,
}) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        {text}
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create New Customer</ModalHeader>
        <ModalBody>
          <CustomerForm
            toggle={toggle}
            person={person}
            customerFunction={customerFunction}
          />
        </ModalBody>
      </Modal>
    </div>
  );
}

export default AddCustomerButton;
