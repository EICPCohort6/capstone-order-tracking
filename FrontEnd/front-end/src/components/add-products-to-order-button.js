import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import ProductsToOrderForm from "./add-to-order";

function AddProductsToOrderButton({
  text = "Add Products",
  product,
  productFunction,
}) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        {text}
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Select Product to Add</ModalHeader>
        <ModalBody>
          <ProductsToOrderForm
            toggle={toggle}
            product={product}
            productFunction={productFunction}
          />
        </ModalBody>
      </Modal>
    </div>
  );
}

export default AddProductsToOrderButton;
