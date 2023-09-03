import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import React from "react";
import AboutMe from "../Components/Home/AboutMe";
import Contact from "../Components/Home/Contact";
import Intro from "../Components/Home/Intro";
import Skills from "../Components/Home/Skills";
import Projects from "../Components/Home/Projects";
import Navbar from "../Components/Navigation/Navbar";
import Alert from "../Components/Events/Alert";
import Loading from "../Components/Events/Loading";

function Home() {
  const alert = useSelector((state) => state.alert);
  const loading = useSelector((state) => state.loading);

  return (
    <Box sx={{ height: "100vh" }}>
      {alert && (
        <Alert
          display={alert.show}
          alert={alert.alert}
        />
      )}
      {loading && (
        <Loading
          display={loading.show}
          msg={loading.msg}
        />
      )}
      <Navbar />
      <Intro />
      <AboutMe />
      <Skills  />
      <Projects />
      <Contact />
    </Box>
  );
}

export default Home;
