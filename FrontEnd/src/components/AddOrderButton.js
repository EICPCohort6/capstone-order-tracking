import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import OrderForm from "./OrderForm";

function AddOrderButton(props) {
  const [modal, setModal] = useState(false);
  const { setCustomerOrdersTable, customerOrdersTable } = props;
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Add New Order
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create New Order</ModalHeader>
        <ModalBody>
          <OrderForm
            setCustomerOrdersTable={(incomingOrder) => {
              setCustomerOrdersTable(incomingOrder);
            }}
            customerOrdersTable={customerOrdersTable}
            onToggleModal={toggle}
            createNewOrder={props.createNewOrder}
          />
        </ModalBody>
      </Modal>
    </div>
  );
}

export default AddOrderButton;
