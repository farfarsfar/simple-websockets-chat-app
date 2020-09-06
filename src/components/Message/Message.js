import React from "react";
import { Flex, Box, Text } from "theme-ui";

const currentUserMessageStyles = {
  marginRight: "none",
  marginLeft: "auto",
  justifyContent: "flex-end",
  textAlign: "right",
};
const Message = ({ author, text, time, shouldShowTime, isCurrentUser }) => (
  <Flex
    as={"li"}
    sx={{
      maxWidth: "60%",
      marginRight: "auto",
      ...(isCurrentUser ? currentUserMessageStyles : {}),
    }}
  >
    <Box>
      {shouldShowTime ? <Text sx={{ fontSize: 14 }}>{time}</Text> : null}
      <Box
        sx={{
          minWidth: "10rem",
          borderRadius: 4,
          padding: 3,
          paddingBottom: 2,
          backgroundColor: isCurrentUser ? "highlight" : "muted",
        }}
      >
        <header>
          {!isCurrentUser ? <Text sx={{ fontSize: 14 }}>{author}</Text> : null}
        </header>
        <Text as={"p"}>{text}</Text>
      </Box>
    </Box>
  </Flex>
);

export default Message;
