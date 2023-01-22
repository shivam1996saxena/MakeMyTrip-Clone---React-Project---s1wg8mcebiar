import { Button, Modal } from "antd";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const Modals = ({ modal2Open, setModal2Open }) => {
  // const [modal1Open, setModal1Open] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Modal
        title='Vertically centered modal dialog'
        centered
        open={modal2Open}
        onOk={() => {
          setModal2Open(false);
          navigate(-1);
        }}
        onCancel={() => {
          setModal2Open(false);
          navigate(-1);
        }}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  );
};
export default Modals;
