import React, { Component } from "react";
import Modal from "react-modal";
import closeModal from "../../assets/close.svg";
import ModalCart from "./ModalCart";
class CartModal extends Component {
    render() {
        const { close, modal } = this.props;
        return (
            <Modal
                ariaHideApp={false}
                parentSelector={() =>
                    document.querySelector("#selectContainer")
                }
                isOpen={modal}
                onRequestClose={close}
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
            >
                <ModalCart close={close.bind(this)} />
                <button
                    className="react-modal-close"
                    type="button"
                    onClick={close}
                >
                    <img src={closeModal} alt="close" />
                </button>
            </Modal>
        );
    }
}

export default CartModal;
