import React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import { useNavigate } from "react-router";

const FloatingBtn = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/auth/chatbot");
  };

  return (
    <Box
      sx={{
        "& > :not(style)": {
          p: 3,
          position: "absolute",
          bottom: 10,
          right: 10,
        },
      }}
      onClick={handleClick}
    >
      <Fab
        size="small"
        color="primary"
        aria-label="add"
        style={{ backgroundColor: "red" }}
      >
        <SmartToyIcon style={{ fill: "white" }} />
      </Fab>
    </Box>
  );
};

export default FloatingBtn;
