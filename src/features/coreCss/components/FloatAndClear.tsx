import '../../../assets/styles/float.css';
import React, { useEffect, useRef } from "react";

const FloatAndClear = () => {
    const gridItems = Array.from({ length: 64 });
    return (
        <div className='float-main-container'>
            <div className='float-header'>
                <h3>Cities</h3>
            </div>
            <div className='float-middle'>
                <div className='float-middle-left'>
                    <p>
                    London
                    Paris
                    Tokyo
                    </p>
                </div>
                <div className='float-middle-right'>
                    <div className='float-middle-right-title'>
                        London
                    </div> 
                    <div className='float-middle-paragraph'>
                        <p className='float-middle-right-paragraph'>
                            London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.
                        </p>
                        <p className='float-middle-right-paragraph'>
                            London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.
                        </p>
                    </div>   
                </div>
            </div>
            <div className='float-footer'>
                <p>Footer</p>
            </div>
        </div>
        
    );
};

export default FloatAndClear;