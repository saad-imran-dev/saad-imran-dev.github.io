import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import React from "react";
import alertAction from "../../store/actions/alert.action";

function Alert({ alert, display }) {
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.5)",
        zIndex: 1000,
        display: display ? "block" : "none",
        position: "fixed",
        cursor: "pointer"
      }}
      onClick={() => {
        dispatch(alertAction.hide());
      }}
    >
      <Box
        sx={{
          width: "20rem",
          height: "11rem",
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
          gap: 2,
          p: 3,
          textAlign: "center"
        }}
      >
        <Typography variant="h4">
          <FontAwesomeIcon
            icon={faCircleXmark}
            size="2xl"
            style={{ color: "#F44336" }}
          />
        </Typography>
        <Typography
          variant="h6"
          fontWeight={560}
          color={"primary.main"}
        >
          {alert ? alert : "Something went Wrong. Please try again."}
        </Typography>
      </Box>
    </Box>
  );
}

export default Alert;
