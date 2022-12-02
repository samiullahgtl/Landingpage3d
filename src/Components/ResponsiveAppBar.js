import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import logovideo from '../Components/assets/dayandnightrentallogo.mp4';
import Typography from '@mui/material/Typography';


function ResponsiveAppBar() {
  return (
    <AppBar style={{ backgroundColor: 'black' }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <video
            width="7%"
            height="7%"
            loop
            muted
            playsInline
            autoPlay={"autoplay"}>
            <source src={logovideo} type="video/mp4" />
          </video>
          <Typography
            marginTop={1.5}
            paddingX={2}
            fontSize={24}
            variant="button"
            display="block"
            style={{ fontFamily: "Rubik Wet Paint", color: 'blueviolet' }}
            gutterBottom>
            Day & Night Rentals Presents: A Unique Travel Experience
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;