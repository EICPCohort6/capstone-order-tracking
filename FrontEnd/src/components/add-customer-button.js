import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import CustomerForm from "./create-customer";

<<<<<<< HEAD
function AddCustomerButton(args) {
=======
function AddCustomerButton({
  text = "Add New Customer",
  person,
  customerFunction,
}) {
>>>>>>> 8a62cf4b46a51d486a00c66ac2e4a3fecdecef8f
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
<<<<<<< HEAD
      <Button color="danger" onClick={toggle}>
        Add New Customer
=======
      <Button color="primary" onClick={toggle}>
        {text}
>>>>>>> 8a62cf4b46a51d486a00c66ac2e4a3fecdecef8f
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create New Customer</ModalHeader>
        <ModalBody>
<<<<<<< HEAD
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
=======
          <CustomerForm
            toggle={toggle}
            person={person}
            customerFunction={customerFunction}
          />
        </ModalBody>
>>>>>>> 8a62cf4b46a51d486a00c66ac2e4a3fecdecef8f
      </Modal>
    </div>
  );
}

export default AddCustomerButton;
