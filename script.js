"use strict";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

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