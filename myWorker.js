"use strict";

onmessage = function(event) {
    
    const canvas = event.data.canvas;
    const ctx = canvas.getContext("2d");
    
    // if (event.data.width) {
    //     state.width = event.data.width;
    //     canvas.height = event.data.height;
    // }
    // Call to resize canvas
    // canvas.width = state.width; 
    // canvas.height = state.height;
    
    const wave = {
        y: canvas.height / 2,
        length: .01,
        amplitude: 100,
        frequency: .009
    }
    
    const strokeColor = {
        h: 200,
        s: 50,
        l: 50
    }
    
    let increment = wave.frequency;
    
    (function animate() {
        requestAnimationFrame(animate);
    
        ctx.fillStyle = `rgba(4, 8, 25, .02)`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    
        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2);
        for (let i = 0; i < canvas.width; i++) {
            ctx.lineTo(i, wave.y + Math.sin(i * wave.length + increment) * wave.amplitude * Math.sin(increment));
        }
        ctx.strokeStyle = `hsl(${Math.abs(strokeColor.h * Math.sin(increment))}, ${Math.abs(strokeColor.s * Math.sin(increment))}%, ${strokeColor.l}%)`;
        ctx.stroke();
    
        increment += wave.frequency;
    })();


}
