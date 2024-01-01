import React, { useEffect, useRef } from "react";
import { Container, Box, Stack, Typography, Grid } from "@mui/material";
import EarthGeoMatrix from "../../utilies/3dModel/EarthGeoMatrix";

const Home = () => {
  return (
    <Container maxWidth={false} className="home-container p-0 ">
      <Box className={"bg-sky-200"} paddingX={20} paddingY={20}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={8}>
            <Stack spacing={2}>
              <span>
                <Typography variant="h1" component={"span"} className="">
                  Welcome
                </Typography>
                <Typography variant="subtitle1" component={"span"}>
                  to
                </Typography>
              </span>
              <Typography variant="h3" component={"span"} className="mt-0">
                Global Business Hub
              </Typography>
              <span>
                Your Gateway to Comprehensive Business Solutions At Global
                Business Hub, we are more than a service provider – we are your
                partner in success. As the one-stop destination for all your
                business needs, we bring a world of services right to your
                fingertips.
              </span>
            </Stack>
          </Grid>
          <Grid item xs={6} md={4}>
            <Box position="relative">
              <EarthGeoMatrix
                className="absolute rotate-[10deg]"
                dotColor="#64748b"
                width={800}
                height={800}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
