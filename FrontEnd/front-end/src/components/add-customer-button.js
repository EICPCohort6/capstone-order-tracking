import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import CustomerForm from "./create-customer";

function AddCustomerButton(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Add New Customer
      </Button>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className="Customer-form"
        fullscreen
      >
        <ModalHeader toggle={toggle}>Create New Customer</ModalHeader>
        <ModalBody>
          <CustomerForm />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Add
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AddCustomerButton;
