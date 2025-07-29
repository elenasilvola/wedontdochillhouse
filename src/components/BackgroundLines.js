import React from 'react';
import '../styles/index.css';
import {ReactComponent as LineSVG} from '../assets/backgroundLines.svg';
import {ReactComponent as LineSVGmobile} from '../assets/backgroundLines-mobile.svg';

const BackgroundLines = ({count}) => {
    return (
        <div className="background-lines">
            {Array.from({length: count}).map((_, index) => 
                index % 2 ===1 ? (
                <div className="line-group" key={index}>
                         <LineSVG />
                         <LineSVGmobile />
                </div>
            ) : null )}
        </div>
    );
};

export default BackgroundLines;