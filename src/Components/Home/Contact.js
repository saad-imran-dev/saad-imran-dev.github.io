import { TextField, Typography, Button } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import emailService from "../../store/services/email.service";
import loadingAction from "../../store/actions/loading.action";
import alertAction from "../../store/actions/alert.action";

function Contact() {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    name: "",
    email: "",
    message: ""
  });

  function handleInput(e) {
    setInput((prevInput) => ({
      ...prevInput,
      [e.target.id]: e.target.value
    }));
  }

  async function contact() {
    if (
      input.name.length === 0 ||
      input.email.length === 0 ||
      input.message.length === 0
    ) {
      dispatch(alertAction.set("Please provide valid inputs"));
      dispatch(alertAction.show());
      return;
    }

    try {
      dispatch(loadingAction.set("Sending Email..."));
      dispatch(loadingAction.show());
      const msg = await emailService.sendEmail(
        input.name,
        input.email,
        input.message
      );
      console.log(msg);
      dispatch(loadingAction.hide());
    } catch (error) {
      dispatch(alertAction.set("Something went Wrong. Please try again."));
      dispatch(alertAction.show());
      dispatch(loadingAction.hide());
      console.log(error);
    }
  }

  return (
    <Box
      sx={{
        height: "100vh",
        background: `url(${require("../../assets/bubles.png")})`,
        backgroundRepeat: "repeat ",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 8
      }}
      id="contact-me"
    >
      <Container
        sx={{
          backgroundColor: "white",
          display: "flex",
          gap: 5,
          justifyContent: "center",
          alignItems: "center",
          p: 8,
          borderRadius: 1
        }}
      >
        <Box sx={{ textAlign: "left" }}>
          <Typography
            variant="h3"
            color="primary.main"
            mb={3}
          >
            Drop me an Email.
          </Typography>
          <Typography
            variant="h3"
            color="primary.main"
          >
            I would like to hear from you.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "60%",
            display: "flex",
            flexDirection: "column",
            gap: 2
          }}
        >
          <Typography
            variant="h3"
            color="secondary.main"
            mb={2}
          >
            Get in Touch
          </Typography>
          <TextField
            id="name"
            value={input.name}
            label="Name"
            variant="outlined"
            onChange={handleInput}
          />
          <TextField
            id="email"
            value={input.email}
            label="Email"
            variant="outlined"
            onChange={handleInput}
          />
          <TextField
            id="message"
            value={input.message}
            label="Message"
            variant="outlined"
            multiline={true}
            minRows={4}
            maxRows={4}
            onChange={handleInput}
          />
          <Button
            variant="contained"
            color="primary"
            sx={{ width: "7rem" }}
            onClick={contact}
          >
            Submit
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Contact;
