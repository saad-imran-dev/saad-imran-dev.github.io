import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

function Navbar() {
  const [selected, setSelected] = useState("home");
  const [bgcolor, setBgcolor] = useState("transparent");

  const listenScrollEvent = (e) => {
    if (window.scrollY < window.innerHeight - 100) {
      setBgcolor("transparent");
    } else {
      setBgcolor("primary.main");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  const navBtnStyle = {
    cursor: "pointer",
    fontWeight: "500"
  };

  function handleOptChange(e) {
    setSelected(e.target.id);
  }

  return (
    <Box
      sx={{
        bgcolor: bgcolor,
        color: "white",
        height: "15vh",
        width: "100%",
        position: "fixed",
        zIndex: "100",
        transition: "0.3s all"
      }}
    >
      <Container sx={{ display: "flex", gap: 8, py: 4 }}>
        <Link
          smooth
          to="/#cover"
          style={{ textDecoration: "none" }}
        >
          <Typography
            id="home"
            variant={"h6"}
            sx={{
              ...navBtnStyle,
              color: selected === "home" ? "secondary.main" : "white"
            }}
            onClick={handleOptChange}
          >
            Home
          </Typography>
        </Link>

        <Link
          smooth
          to="/#about-me"
          style={{ textDecoration: "none" }}
        >
          <Typography
            id="about"
            variant={"h6"}
            sx={{
              ...navBtnStyle,
              color: selected === "about" ? "secondary.main" : "white"
            }}
            onClick={handleOptChange}
          >
            About
          </Typography>
        </Link>

        <Link
          smooth
          to="/#technology"
          style={{ textDecoration: "none" }}
        >
          <Typography
            id="technologies"
            variant={"h6"}
            sx={{
              ...navBtnStyle,
              color: selected === "technologies" ? "secondary.main" : "white"
            }}
            onClick={handleOptChange}
          >
            Technologies
          </Typography>
        </Link>

        <Link
          smooth
          to="/#project"
          style={{ textDecoration: "none" }}
        >
          <Typography
            id="projects"
            variant={"h6"}
            sx={{
              ...navBtnStyle,
              color: selected === "projects" ? "secondary.main" : "white"
            }}
            onClick={handleOptChange}
          >
            Projects
          </Typography>
        </Link>

        <Link
          smooth
          to="#contact-me"
          style={{ textDecoration: "none" }}
        >
          <Typography
            id="contact"
            variant={"h6"}
            sx={{
              ...navBtnStyle,
              color: selected === "contact" ? "secondary.main" : "white"
            }}
            onClick={handleOptChange}
          >
            Contact
          </Typography>
        </Link>
      </Container>
    </Box>
  );
}

export default Navbar;
