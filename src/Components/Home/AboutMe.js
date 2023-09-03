import React from "react";
import { Typography, Button } from "@mui/material";
import { Box, Container } from "@mui/system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

function AboutMe() {
  return (
    <Box
      sx={{ height: "100vh", display: "flex", flexDirection: "column" }}
      id="about-me"
    >
      <Container
        sx={{
          height: "65vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 6,
          my: "auto"
        }}
      >
        <Box
          component="img"
          src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
          height="100%"
        />

        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          <Typography
            variant="h3"
            sx={{ color: "secondary.main", fontWeight: 600 }}
          >
            About Me
          </Typography>
          <Typography
            variant="body1"
            sx={{ my: 4 }}
          >
            An inquisitive Computer Science student, skilled in leadership,
            seeking to leverage solid development skills with focus on
            collaboration, communication and passion.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: "10rem" }}
          >
            Download CV
          </Button>
        </Box>
      </Container>

      <Container sx={{ mt: "auto", mb: 6, textAlign: "center" }}>
        <Typography variant="subtitle1">
          <FontAwesomeIcon
            icon={faAnglesDown}
            beat
          />{" "}
          Scroll
        </Typography>
      </Container>
    </Box>
  );
}

export default AboutMe;
