import React from 'react';
import video from '../Components/assets/3dVideoFile.mp4';
import '../App.css';

export default props => {
    return (
        <div>
            <video
                style={{
                    // marginTop: '220px',
                    borderRadius: 40,
                    cursor: 'pointer',
                    marginTop:'-18%',
                    marginBottom:'5%'
                }}
                // width="50%"
                // height="50%"
               // className="video"
                height= '60%'
                width= '60%'
                loop
                controls
                autoPlay={true}>
                <source src={video} type="video/mp4" />
            </video>
        </div>
    );
};
