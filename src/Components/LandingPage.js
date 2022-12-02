import React, { useState } from 'react';
import '../App.css';
import '../index.css';
import Tilt from 'react-parallax-tilt';
import Video from './Video';

import logovideo from '../Components/assets/dayandnightrentallogo.mp4';
import Typography from '@mui/material/Typography';
import Button001 from './Btn';
import text from '../Components/assets/3DText.png';

function LandingPage() {

    const [night, setNight] = useState(true);

    const handleClick = () => {
        setNight(!night);
    };

    return (
        <div className={night ? 'dark' : 'light'}>
            <div>
                <video
                    style={{
                        position: 'absolute',
                        top: 30,
                        left: 5
                    }}
                    width="12%"
                    height="12%"
                    loop
                    muted
                    playsInline
                    autoPlay={"autoplay"}>
                    <source src={logovideo} type="video/mp4" />
                </video>
                <div>
                    <Typography
                        marginTop={1.5}
                        paddingX={2}
                        fontSize={24}
                        variant="button"
                        display="block"
                        style={{
                            fontFamily: "Rubik Wet Paint",
                            // backgroundColor: 'white',
                            color: 'black',
                            position: 'absolute',
                            top: 35,
                            left: 150
                        }}
                        gutterBottom>
                        Presents:
                    </Typography>
                </div>
                <div>
                    <img src={text} style={{ height: '50%', width:'50%', position: 'absolute', left: '25%', top: '-10%'}} />
                </div>
            </div>
            <div>
                <Button001 onclick={handleClick} />
            </div>
            <div>
                <Tilt
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
                    }} >
                    <Video />
                </Tilt>
            </div>
        </div>
    );
}

export default LandingPage;