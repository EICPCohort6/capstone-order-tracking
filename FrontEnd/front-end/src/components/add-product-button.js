import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import AddProductForm from "./create-add-product";

function AddProductButton({ text, product, productFunction }) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        {text}
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Product</ModalHeader>
        <ModalBody>
          Max Quantity: {product.product_quantity}
          <AddProductForm
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
