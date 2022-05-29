import { Modal } from "react-bootstrap";

const ProductModal = ({ smShow, setSmShow, name }) => {
  return (
    <Modal
      size="sm"
      show={smShow}
      onHide={() => setSmShow(false)}
      aria-labelledby="example-modal-sizes-title-sm"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-sm">
          Added to Cart!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{`Product ${name} was added to the cart.`}</Modal.Body>
    </Modal>
  );
};

export default ProductModal;
