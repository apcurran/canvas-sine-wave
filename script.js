"use strict";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

ctx.fillStyle = "green";
ctx.fillRect(10, 10, 150, 150);