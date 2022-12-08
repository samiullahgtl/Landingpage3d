import React, { useState } from 'react';
import '../App.css';
import '../index.css';
import Tilt from 'react-parallax-tilt';
import Video from './Video';

import logovideo from '../Components/assets/dayandnightrentallogo.mp4';
import Typography from '@mui/material/Typography';
import Button001 from './Btn';
import text from '../Components/assets/3Dtext.png';

function LandingPage() {

    const [night, setNight] = useState(true);

    const handleClick = () => {
        setNight(!night);
    };

    return (
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
                <Typography
                    marginTop={0}
                    paddingX={2}
                    fontSize={'340%'}
                    variant="button"
                    display="block"
                    style={{
                        fontFamily: "Amatic SC",
                        // backgroundColor: 'white',
                        color: 'white',
                        fontWeight: 'bold',
                        position: 'absolute',
                        top: '5%',
                        left: '25%'
                    }}
                    gutterBottom>
                    Presents:
                </Typography>
                {/* left:500, top:-50 */}
                <img src={text} className='text' height={400} width={500} paddingLeft={50} style={{ position: 'absolute', top: -10 }} />
            </div>
            <div>
                {/* <Button001 onclick={handleClick} /> */}
            </div>
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
                <Video />
                {/* </Tilt> */}
            </div>
        </div>
    );
}

export default LandingPage;