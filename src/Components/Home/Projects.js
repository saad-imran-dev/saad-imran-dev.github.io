import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import projects from "../../store/projects";

function Projects() {
  const [idx, setIdx] = useState(0);

  const proj = projects[idx];
  console.log(idx, " index");
  function handleNext() {
    setIdx((prevIdx) => (prevIdx + 1) % projects.length);
  }

  function handlePrev() {
    setIdx((prevIdx) => (prevIdx - 1 + projects.length) % projects.length);
  }

  return (
    <Box
      sx={{ height: "100vh", display: "flex", flexDirection: "column" }}
      id="project"
    >
      <Box
        sx={{
          height: "75vh",
          display: "flex",
          gap: 8,
          justifyContent: "center",
          alignItems: "center",
          my: "auto"
        }}
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          size="2xl"
          style={{ cursor: "pointer", color: "grey" }}
          onClick={handlePrev}
        />

        <Box
          sx={{
            width: "40vw",
            display: "flex",
            flexDirection: "column",
            cursor: "grab"
          }}
        >
          <Box
            component="img"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/03fdb466-60c7-4df2-8aeb-8f9f008d2afa/db8o23g-c69fffc4-ad01-4d0a-8add-832de1a26de7.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAzZmRiNDY2LTYwYzctNGRmMi04YWViLThmOWYwMDhkMmFmYVwvZGI4bzIzZy1jNjlmZmZjNC1hZDAxLTRkMGEtOGFkZC04MzJkZTFhMjZkZTcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.u2KXFJm5O_QWDqHAScT-QTWe_pwrUaCubl4UMxl1Gw0"
            sx={{
              height: "35vh",
              mx: "auto",
              "&:hover": { transform: "scale(1.1)", transition: "1s all" },
              transition: "1s all"
            }}
          />
          <Typography
            variant="h5"
            sx={{ fontWeight: 800, mt: 4, color: "secondary.main" }}
          >
            {proj && proj.title}
          </Typography>
          <Typography sx={{ my: 2 }}>{proj && proj.desc}</Typography>

          {proj && proj.site ? (
            <a
              href={proj.link}
              target="_blank"
              rel="noreferrer"
            >
              <Button
                variant="contained"
                color="primary"
                sx={{ width: "7rem", borderRadius: 5 }}
              >
                Visit Site
              </Button>
            </a>
          ) : (
            <a
              href={proj.link}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                style={{ color: "#283C63", fontSize: "2rem", width: "2rem" }}
              />
            </a>
          )}
        </Box>

        <FontAwesomeIcon
          icon={faChevronRight}
          size="2xl"
          style={{ cursor: "pointer", color: "grey" }}
          onClick={handleNext}
        />
      </Box>
      {/* <Box sx={{ mt: "auto", mb: 12, textAlign: "center" }}>
        <Typography variant="subtitle1">
          <FontAwesomeIcon
            icon={faAnglesDown}
            beat
          />{" "}
          Scroll
        </Typography>
      </Box> */}
    </Box>
  );
}

export default Projects;
