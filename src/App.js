import React, { useRef } from "react";
import { Box, Flex } from "theme-ui";
import randomUser from "random-username-generator";

import { CHAT } from "constants/api-endpoints.constants";
import { HOST } from "constants/environment.constants";
import { MessageList, ChatForm, ReadyStateIndicator } from "components";
import { useWebsocketChat } from "hooks";

function App() {
  const userName = useRef(randomUser.generate());

  const { status, sendMessage, messages, numberOfClients } = useWebsocketChat(
    `ws://${HOST}/${CHAT}`,
    userName.current
  );
  return (
    <Flex
      sx={{
        padding: 3,
        paddingBottom: 4,
        height: "100vh",
        flexDirection: "column",
        justifyContent: "space-between",
        margin: "0 auto",
        width: ["100%", null, "50%"],
      }}
    >
      <MessageList messages={messages} currentUser={userName.current} />
      <Box sx={{ marginTop: "auto" }}>
        <Box mb={2}>
          <ChatForm onSubmit={sendMessage} disabled={!status.ready} />
        </Box>
        <Flex sx={{ justifyContent: "space-between" }}>
          <ReadyStateIndicator
            ready={status.ready}
            connecting={status.connecting}
            closed={status.closed}
          />
          {numberOfClients > 0 ? (
            <Box>{numberOfClients} connected users</Box>
          ) : null}
        </Flex>
      </Box>
    </Flex>
  );
}

export default App;
