import React from "react";
import { Box, Flex } from "theme-ui";

import { Message } from "components";

const MessageList = ({ messages, currentUser }) => (
  <Flex
    as={"ul"}
    sx={{ listStyle: "none", padding: 0, flexDirection: "column" }}
  >
    {messages.map((message, i) => {
      const isCurrentUser = message.author === currentUser;
      return (
        <Box mb={3} key={i}>
          <Message
            {...message}
            shouldShowTime={i === 0 || message.time !== messages[i - 1].time}
            isCurrentUser={isCurrentUser}
          />
        </Box>
      );
    })}
  </Flex>
);

export default MessageList;
