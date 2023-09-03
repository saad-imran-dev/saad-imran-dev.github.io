import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

function Intro() {
  return (
    <Box
      id="cover"
      sx={{
        height: "100vh",
        color: "white",
        background: `url(${require("../../assets/splash.png")})`,
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative"
      }}
    >
      <Container sx={{ mt: "auto" }}>
        <Box>
          <Typography
            variant="h3"
            sx={{
              pb: 2,
              textTransform: "uppercase",
              WebkitTextStroke: "1.5px #fff",
              WebkitTextFillColor: "transparent"
            }}
          >
            Muhammad Saad
          </Typography>
          <Typography
            variant="h5"
            sx={{ pb: 2 }}
          >
            Fullstack Developer
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <a
              href="https://github.com/AE186"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                style={{ color: "#928A97", fontSize: "2rem" }}
              />
            </a>

            <a
              href="https://www.linkedin.com/in/saad-vohra/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ color: "#928A97", fontSize: "2rem" }}
              />
            </a>
          </Box>
        </Box>
      </Container>
      <Container sx={{ mt: "auto", mb: 6 }}>
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

export default Intro;
