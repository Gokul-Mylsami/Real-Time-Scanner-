import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Form from "./screens/Form";
import io from "socket.io-client";
import Success from "./screens/Success";

const socket = io.connect("http://192.168.98.216:8080");
const App = () => {
  const [randomId, setRandomId] = useState(Math.floor(Math.random() * 1000));
  const [id, setId] = useState("");
  // const [submit, setSubmit] = useState(false);

  socket.on("message", (id) => {
    console.log(id);
    setId(parseInt(id));
    // setSubmit(true);
  });
  return (
    <Routes>
      <Route
        path="/"
        element={<Home randomId={randomId} submit={id === randomId} />}
      />
      <Route path="/:id" element={<Form randomId={randomId} />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
};

export default App;
