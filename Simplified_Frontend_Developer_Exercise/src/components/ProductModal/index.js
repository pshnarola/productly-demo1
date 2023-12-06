import React from "react";
import Modal from "react-bootstrap/Modal";

import "./productModal.css";

const ProductModal = (props) => {
  const { isOpen, handleModal, product } = props;
  const { title, description, image } = product;

  return (
    <Modal
      show={isOpen}
      onHide={handleModal}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter overflow-y-auto"
      centered>
      <Modal.Header closeButton className="border-0" />
      <Modal.Body>
        <div className="card mb-3 w-100 h-100 p-2 border-0">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <img
                src={image}
                className="img-fluid rounded-start img-size mx-auto"
                alt={title}
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title fs-3 lh-sm">{title}</h5>
                <p className="card-text mt-5 text-md fs-5 text-body-secondary">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProductModal;
