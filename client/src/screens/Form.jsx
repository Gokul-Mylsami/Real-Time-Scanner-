import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import "../styles/screens/Form.css";
import Success from "../screens/Success";

const socket = io.connect("http://192.168.98.216:8080");
const Form = ({ randomId }) => {
  const { id } = useParams();
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    roll: "",
  });

  useEffect(() => {
    socket.on("connect");
  }, []);

  console.log(id);

  const submitHandler = (e) => {
    e.preventDefault();
    setSuccess(true);
    socket.emit("message", `${id}`);
  };

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (success) {
    return <Success />;
  }

  return (
    <div className="form-container">
      {success && <p>Form Submitted</p>}
      <form onSubmit={submitHandler} className="form">
        <div className="form-elements">
          <label htmlFor="">Name </label>
          <input
            type="text"
            name="name"
            className="input-field"
            onChange={changeHandler}
          />
        </div>
        <div className="form-elements">
          <label htmlFor="">Roll No </label>
          <input
            type="text"
            name="roll"
            className="input-field"
            onChange={changeHandler}
          />
        </div>
        <div className="btn-container">
          <button type={"submit"} className="btn" onClick={submitHandler}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
