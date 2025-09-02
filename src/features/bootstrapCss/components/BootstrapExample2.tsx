import React from "react";

const BootstrapExample2 = () => {
    // Get the canvas element and its context
    const canvas = document.getElementById('myCanvas');
    // const ctx = canvas && canvas.getContext('2d');

    // Draw a filled rectangle
    // ctx.fillStyle = '#FF0000'; // Red color
    // ctx.fillRect(50, 50, 200, 100); // x, y, width, height
    return(<>
        <h1> Example 2
        </h1>
        <canvas id="myCanvas" width="500" height="300" style={{border:'1px solid #000000;'}}>
        Your browser does not support the canvas element.
        </canvas>
    </>)
    
};

export default BootstrapExample2;