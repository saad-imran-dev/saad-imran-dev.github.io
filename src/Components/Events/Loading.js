import React from "react";
import { CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";

function Loading({ display, msg }) {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.5)",
        zIndex: 1000,
        display: display ? "block" : "none",
        position: "fixed"
      }}
    >
      <Box
        sx={{
          width: "20rem",
          height: "10rem",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "white",
          borderRadius: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2
        }}
      >
        <Typography variant="h4">
          <CircularProgress />
        </Typography>
        <Typography
          variant="h6"
          fontWeight={560}
        >
          {msg ? msg : "Please Wait..."}
        </Typography>
      </Box>
    </Box>
  );
}

export default Loading;
