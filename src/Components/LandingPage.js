import React, { useState } from 'react';
import '../App.css';
import '../index.css';
// import Tilt from 'react-parallax-tilt';
import Video from './Video';
import logovideo from '../Components/assets/dayandnightrentallogo.mp4';
import Typography from '@mui/material/Typography';
// import Button001 from './Btn';
import text from '../Components/assets/3Dtext.png';
import cursor from '../Components/assets/Button/abc.png';
import Grid from '@mui/material/Grid';


function LandingPage() {

    const [night, setNight] = useState(true);

    // const handleClick = () => {
    //     setNight(!night);
    // };

    return (
        <a href="https://www.w3schools.com" className='cursor'>
            <div className={night ? 'dark' : 'light'} style={{ overflowY: 'auto' }}>

                <div>
                    <video
                        style={{
                            position: 'absolute',
                            top: 30,
                            left: 5
                        }}
                        width="12%"
                        height="12%"
                        className='logo'
                        loop
                        muted
                        playsInline
                        autoPlay={"autoplay"}>
                        <source src={logovideo} type="video/mp4" />
                    </video>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={3}></Grid>
                        <Grid item xs={12} md={6}>
                            <Grid item xs={12} md={1}>
                                <Typography
                                    marginTop={0}
                                    paddingX={2}
                                    fontSize={'340%'}
                                    style={{
                                        fontFamily: "Rubik Wet Paint",
                                        // backgroundColor: 'white',
                                        color: 'white',
                                        marginTop: '30%'

                                    }}
                                    variant="button"
                                    display="block"
                                    gutterBottom>
                                    Presents:
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={11}>
                                <img
                                    src={text}
                                    // className='text'
                                    top='10%'
                                    height='600px'
                                    width={'600px'}
                                    style={{
                                        marginTop: '-35%',
                                        textAlign: 'center',
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Video />
                        </Grid>
                    </Grid>


                </div>
                {/* <div>
                <Button001 onclick={handleClick} />
            </div> */}
                <div>
                    {/* <Tilt
                    options={{
                        max: 0,
                        perspective: 1000,
                        scale: 3600,
                        speed: 300,
                        transition: true,
                        axis: null,
                        reset: true,
                        easing: "cubic-bezier(.03,.98,.52,.99)",
                        glare: false,
                        "max-glare": 1,
                        "glare-prerender": false
                    }} > */}

                    {/* </Tilt> */}
                </div>
            </div>
        </a>
    );
}

export default LandingPage;