import React from "react";
import { Box, Container, Typography } from "@mui/material";
import SliderComp from "../components/SliderComp";

const Home = () => {
  return (
    <Container >
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          m: 2,
          backgroundColor: "transparent",
        }}
      >
        Welcome to CodEdu Collective, a community-driven organization.
      </Typography>

      <SliderComp />
    </Container>
  );
};

export default Home;
