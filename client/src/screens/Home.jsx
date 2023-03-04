import React from "react";
import QRCode from "react-qr-code";
import { useNavigate } from "react-router-dom";

const Home = ({ randomId, submit }) => {
  const navigate = useNavigate();
  if (submit) {
    navigate("/success");
  }
  return (
    <div style={{ marginLeft: "20px" }}>
      <h1>Scan id : {randomId}</h1>
      <QRCode value={window.location.href + randomId} />
    </div>
  );
};

export default Home;
