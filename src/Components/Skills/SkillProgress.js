import { LinearProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function SkillProgress({ label, progress }) {
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "end" }}>
        <Typography
          variant="body1"
          color="primary.main"
          sx={{ fontWeight: 600, mr: "auto" }}
        >
          {label}
        </Typography>
        <Typography
          variant="subtitle2"
          color="primary.main"
          sx={{ fontWeight: 600, mr: 1 }}
        >
          {progress >= 80
            ? "Advanced"
            : progress >= 40
            ? "Intermediate"
            : "Beginner"}
        </Typography>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box sx={{ width: "100%" }}>
          <LinearProgress
            variant="determinate"
            value={progress}
            color="secondary"
            sx={{ height: "0.7rem", borderRadius: 5 }}
          />
        </Box>
        {/* <Typography
          variant="subtitle1"
          color="primary.lighter"
        >
          {progress}%
        </Typography> */}
      </Box>
    </Box>
  );
}

export default SkillProgress;
