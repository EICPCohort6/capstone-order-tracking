import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ConfirmDialog = (props) => {
  const [modal, setModal] = useState(false);

  const { deleteItem, id } = props;

  const toggle = () => setModal(!modal);

  return (
    <>
      <Button color="danger" onClick={toggle}>
        Delete
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Delete item?</ModalHeader>
        <ModalBody>Are you sure you wish to Delete this item?</ModalBody>
        <ModalFooter>
          <Button
            color="danger"
            onClick={() => {
              toggle();
              deleteItem(id);
            }}
          >
            Yes
          </Button>
          <Button color="secondary" onClick={toggle}>
            No
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
export default ConfirmDialog;
