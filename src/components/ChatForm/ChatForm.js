import React, { useState } from "react";
import { Box, Flex, Button } from "theme-ui";

const ChatForm = ({ onSubmit, disabled }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (evt) => setInputValue(evt.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue("");
  };
  return (
    <Flex as={"form"} onSubmit={handleSubmit} sx={{ flex: 1 }}>
      <Box
        as={"input"}
        onChange={handleInputChange}
        value={inputValue}
        sx={{ flex: 1, fontSize: 20 }}
      />
      <Button
        disabled={disabled || !inputValue}
        sx={{ ml: 2, cursor: "pointer" }}
      >
        send
      </Button>
    </Flex>
  );
};

export default ChatForm;
