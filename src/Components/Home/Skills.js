import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import skills from "../../store/skills";
import SkillProgress from "../Skills/SkillProgress";

function Skills() {
  return (
    <Box
      sx={{ height: "100vh", display: "flex", flexDirection: "column" }}
      id="technology"
    >
      <Container
        sx={{
          height: "65vh",
          display: "flex",
          gap: 6,
          justifyContent: "center",
          alignItems: "center",
          my: "auto"
        }}
      >
        <Box sx={{ width: "50%" }}>
          <Typography
            variant="h3"
            sx={{
              color: "secondary.main",
              fontWeight: 600,
              alignSelf: "start",
              mb: 4
            }}
          >
            Technologies
          </Typography>
          <Typography
            variant="body1"
            sx={{ mt: 4, textAlign: "justify" }}
          >
            I have a diverse skill set that allows me to tackle complex
            challenges and contribute effectively to various projects. With
            substantial experience in Web Development, I have honed my expertise
            in leveraging frameworks like React.js, Node.js, and databases like
            SQL and NoSQL. Additionally, I have delved into the realm of
            Artificial Intelligence, gaining insights into cutting-edge
            technologies like Deep Learning and Data Analysis.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "40%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mt: 5
          }}
        >
          {skills.map((prop) => {
            return <SkillProgress {...prop} />;
          })}
        </Box>
      </Container>
      <Box sx={{ mt: "auto", mb: 6, textAlign: "center" }}>
        <Typography variant="subtitle1">
          <FontAwesomeIcon
            icon={faAnglesDown}
            beat
          />{" "}
          Scroll
        </Typography>
      </Box>
    </Box>
  );
}

export default Skills;
