import React from "react";
import { Box, Text, Flex } from "theme-ui";

import { Spinner } from "components";
const ReadyStateIndicator = ({ connecting, ready, closed }) => {
  return (
    <Box sx={{ minHeight: "2rem" }}>
      {connecting ? (
        <Spinner />
      ) : (
        <Flex sx={{ alignItems: "center" }}>
          <Box
            sx={{
              borderRadius: 999,
              display: "inline-block",
              width: 10,
              height: 10,
              backgroundColor: ready ? "mediumseagreen" : "primary",
            }}
          />

          {closed ? (
            <Text
              sx={{
                display: "inline-block",
                fontWeight: "display",
                fontSize: 14,
              }}
              ml={1}
            >
              connection closed, try refreshing
            </Text>
          ) : null}
        </Flex>
      )}
    </Box>
  );
};

export default ReadyStateIndicator;
