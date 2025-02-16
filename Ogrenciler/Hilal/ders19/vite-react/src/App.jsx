import React, { useState } from "react";
import ListItem from "./components/ListItem";
import "./App.css";

function App() {
  const students = ["Ali", "Veli", "Deli"];
  return (
    <>
      HELLO
      <ul>
        {students.map((student) => (
          <ListItem key={index} student={student} />
        ))}
      </ul>
    </>
  );
}

export default App;
