import { Box } from "@material-ui/core";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Login from "./components/login";
import Signup from "./components/signup";

function App() {
  return (
    <Box>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/mainpage" element={<Home />} />
      </Routes>
    </Box>
  );
}

export default App;
