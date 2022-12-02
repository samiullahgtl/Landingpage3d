import React from 'react';
import '../Components/styles.css';

const Btn = (props) => {
    
    const { onclick } = props;

    return (<>
        <div className="btn-1">
            <div id="b1">
                <div className='b1'>
                    <button onClick={onclick} className="b-1">
                        <p style={{fontSize: 16}}>Theme</p>
                    </button>
                </div>
            </div>
        </div>
    </>
    )
};
export default Btn