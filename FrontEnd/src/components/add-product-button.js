import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import ProductForm from "./create-product";

function AddProductButton({
  text = "Modify Product",
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
        <ModalHeader toggle={toggle}>Modify Product Details</ModalHeader>
        <ModalBody>
          <ProductForm
            toggle={toggle}
            product={product}
            productFunction={productFunction}
          />
        </ModalBody>
      </Modal>
    </div>
  );
}

export default AddProductButton;
