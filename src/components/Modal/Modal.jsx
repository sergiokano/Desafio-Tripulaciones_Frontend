import React, { useState } from "react";
import {Modal } from "antd";


const ModalComponent = (isModalVisible, setIsModalVisible) => {
  
  
  
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      
      <Modal
        title="Basic Modal"
        open={isModalVisible}
        onCancel={handleCancel}
      ></Modal>
    </>
  );
};

export default ModalComponent;
