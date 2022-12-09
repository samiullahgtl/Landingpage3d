import React, { useState } from 'react';
import '../Components/styles.css';
import Imag from './assets/Button/btn1.png'
import Imag2 from './assets/Button/btn2.png'
import abc from './assets/Button/abc.png';

const Btn = (props) => {

    const { onclick } = props;
    const [image, setImage] = useState(Imag)

    const imgClick = () => {
        setImage(Imag2)
        // onclick();
        const interval = setInterval(() => {
            setImage(Imag)
        }, 500);
    }

    return (<>
        <input
            src={image}
            type="image"
            className='btn-1'
            onClick={imgClick}
            style={{
                height: '100px',
                width: '100px',
                cursor: "url(" + abc + "), auto"
            }}
        />
        {/* <button style={{background:'./assets/Button/BUTTON-1-.png'}}>Click Here</button>  */}
        {/* <div className="btn-1">
            <div id="b1">
                <div className='b1'>
                    <button onClick={onclick} className="b-1">
                        <p style={{fontSize: 16}}>Theme</p>
                    </button>
                </div>
            </div>
        </div> */}
    </>
    )
};
export default Btn