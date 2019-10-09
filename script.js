"use strict";

const canvas = document.getElementById("canvas");
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
const offscreenCanvas = canvas.transferControlToOffscreen();
const worker = new Worker("myWorker.js");
worker.postMessage({ canvas: offscreenCanvas }, [offscreenCanvas] );

// function sendSize() {
//     worker.postMessage({
//         width: document.documentElement.clientWidth,
//         height: document.documentElement.clientHeight
//     });
// }

// sendSize();