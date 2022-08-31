import { Box, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import UserAppBar from "../navbar/user_navbar";
import axios from "axios";
import MovieCard from "./movie_card";
import CircularProgress from "@mui/material/CircularProgress";

const Home = () => {
  const [data, setdata] = useState([]);
  const [loadstate, setloadstate] = useState(false);
  useEffect(() => {
    axios
      .get("https://www.omdbapi.com/?i=tt3896198&apikey=cbd7f5b3")
      .then(res => {
        console.log(res);
        setdata([res.data]);
      })
      .catch(err => {
        setloadstate(true);
      });
  }, []);

  return (
    <Box>
      <UserAppBar />

      <Box style={{ margin: "20px" }}>
        <Typography variant="h6">Trending Movies</Typography>

        <br />
        {loadstate
          ? <CircularProgress style={{ margin: "100px 600px" }} />
          : <MovieCard data={data} />}
      </Box>
    </Box>
  );
};

export default Home;
