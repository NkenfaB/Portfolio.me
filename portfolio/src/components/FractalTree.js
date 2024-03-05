import React, { Component } from "react";

class FractalTree extends Component {
  componentDidMount() {
    this.drawFractalTree();
  }

  drawBranch(ctx, startX, startY, length, angle, depth) {
    if (depth === 0) return;

    const endX = startX + length * Math.cos(angle);
    const endY = startY - length * Math.sin(angle);

    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();

    const newLength = length * 0.7;
    const newDepth = depth - 1;

    this.drawBranch(ctx, endX, endY, newLength, angle - 0.3, newDepth);
    this.drawBranch(ctx, endX, endY, newLength, angle + 0.3, newDepth);
  }

  drawFractalTree() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "#000"; // Branch color

    const startX = canvas.width / 2;
    const startY = canvas.height;

    const length = 100;
    const angle = -Math.PI / 2; // Initial angle (pointing upwards)
    const depth = 7; // Depth of recursion

    this.drawBranch(ctx, startX, startY, length, angle, depth);
  }

  render() {
    return <canvas ref="canvas" width={400} height={400} />;
  }
}

export default FractalTree;
