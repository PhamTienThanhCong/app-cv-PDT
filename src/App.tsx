import "./App.css";
import { Routes, Route } from "react-router-dom";
import CV from "./pages/cv";
import CV1 from "./pages/cv1";
import { Box } from "@mui/material";

function App() {
  return (
    <Box
      sx={{
        bgcolor: "#cfe8fc",
        margin: "0",
        display: "flex",
        flexDirection: "column",
        flexJustify: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Routes>
        <Route path="/" element={<CV />} />
        <Route path="/cv1" element={<CV1 />} />
      </Routes>
    </Box>
  );
}

export default App;