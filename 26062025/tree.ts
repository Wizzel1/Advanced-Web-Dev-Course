function createTree(height: number) {
    const totalHeight = (height * 2) + 1;
    const rowWidth = totalHeight % 2 === 0 ? totalHeight + 1 : totalHeight;
    for (let i = 0; i < totalHeight; i++) {
        if (i === 0) {
            console.log(" ".repeat(totalHeight));
        } else if (i === 1) {
            const hPadding = (rowWidth - 1) / 2;
            console.log(" ".repeat(hPadding) + "*" + " ".repeat(hPadding));
        } else if (i % 2 === 0) {
            console.log(" ".repeat(totalHeight))
        } else {
            const hPadding = (rowWidth - i) / 2;
            console.log(" ".repeat(hPadding) + "*".repeat(i) + " ".repeat(hPadding));
        }
    }
}

createTree(2);