import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import OrderForm from "./OrderForm";
import OrdersTable from "./OrdersTable";

function AddOrderButton(props) {
  const [modal, setModal] = useState(false);
  const { setCustomerOrdersTable, customerOrdersTable } = props;
  console.log("current orders", customerOrdersTable);
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
              console.log(incomingOrder);
              setCustomerOrdersTable(incomingOrder);
            }}
            customerOrdersTable={customerOrdersTable}
            onToggleModal={toggle}
          />
        </ModalBody>
      
      </Modal>
      <div style={{ marginTop: "10px"}}>
          {
              customerOrdersTable.length > 0 && (

                  <OrdersTable customerOrders={customerOrdersTable} />
              )
          }
      </div>
    </div>
  );
}

export default AddOrderButton;
