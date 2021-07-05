function drawLattice(board, ctx) {
    board.forEach((row, y) => {
        row.forEach((value, x) => {
            if ((x % 2 == 0 && y % 2 == 0) || (x % 2 == 1 && y % 2 == 1)) {
                ctx.fillStyle = '#f9f9ff';
            } else {
                ctx.fillStyle = '#eeeeff';
            }
            ctx.fillRect(x, y, 1, 1);
        });
    });
}

function rebuild() {
    resize();
    drawLattice(matrixMainBoard, ctxMainBoard);
    drawLattice(new Array(4).fill(new Array(4).fill(0)), ctxNextBoard);
}

console.log(drawLattice)