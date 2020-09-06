import React from "react";
import { Box } from "theme-ui";

const Spinner = () => (
  <Box
    sx={{
      borderRadius: 999,
      width: 20,
      height: 20,
      borderStyle: "solid",
      borderColor: "muted",
      borderWidth: 2,
      borderLeftColor: "gray",
      animation: "rotate 1s linear infinite",
      "@keyframes rotate": {
        from: {
          transform: "rotate(0deg)",
        },
        to: {
          transform: "rotate(360deg)",
        },
      },
    }}
  />
);

export default Spinner;
