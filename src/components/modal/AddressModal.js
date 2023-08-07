import React from 'react'
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";


const AddressModal = ({isOpen, closeModal}) => {


  return (
    <Modal open={isOpen} onClose={closeModal} center>
        <div>
        <h3>Select Address</h3>
            <label for="choose-address">
                <input id="choose-address" name="address" type="radio" />
                <span>Akash</span>
                Edge colony, Chandigarh, Punjab, 1601
            </label>
                <br />
            <label for="choose-address" >
                <input id="choose-address" name="address" type="radio" />
                <span>Vishal kumar</span>
                Perfect view, Banglore, India, 13512
            </label>

            <p>work in Progress</p>
        </div>
    </Modal>    
  )
}

export default AddressModal