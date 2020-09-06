import React, { useState } from "react";

const ChatForm = ({ onSubmit, disabled }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (evt) => setInputValue(evt.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleInputChange} value={inputValue}></input>
      <button disabled={disabled || !inputValue}>send</button>
    </form>
  );
};

export default ChatForm;
