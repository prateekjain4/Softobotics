import { Box } from "@material-ui/core";
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import HomeAppBar from "../navbar/home_navbar";
import Typography from "@material-ui/core/Typography";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("please enter email and password");
    } else {
      navigate("/mainpage");
    }
  };
  return (
    <Box>
      <HomeAppBar />
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "100px",
          width: "50%"
        }}
      >
        <Typography variant="h5" style={{ textAlign: "center" }}>
          LOGIN HERE !
        </Typography>
        <br />
        <br />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={email}
          onChange={e => setemail(e.target.value)}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          value={password}
          onChange={e => setpassword(e.target.value)}
        />
        <br />

        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Login
        </Button>
      </Container>
    </Box>
  );
};

export default Login;
