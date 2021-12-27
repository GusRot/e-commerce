import React, { Component } from "react";
import Modal from "react-modal";

class CartModal extends Component {
    render() {
        return (
            <Modal
                parentSelector={() =>
                    document.querySelector("#selectContainer")
                }
                isOpen={true}
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
            ></Modal>
        );
    }
}

export default CartModal;
