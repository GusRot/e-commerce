import React, { Component } from "react";
import Modal from "react-modal";
import closeModal from "../../assets/close.svg";
import ModalCart from "./ModalCart";
class CartModal extends Component {
    render() {
        return (
            <Modal
                parentSelector={() =>
                    document.querySelector("#selectContainer")
                }
                isOpen={this.props.modal}
                onRequestClose={this.props.close}
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
            >
                <ModalCart />
                <button
                    className="react-modal-close"
                    type="button"
                    onClick={this.props.close}
                >
                    <img src={closeModal} alt="close" />
                </button>
            </Modal>
        );
    }
}

export default CartModal;
