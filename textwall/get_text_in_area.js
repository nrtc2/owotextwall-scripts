function getTextInArea(startX, startY, endX, endY) {
    function getCharXY(e, t) {
        const chunkX = Math.floor(e / 20) * 20;
        const chunkY = Math.floor(t / 10) * 10;
        const coordX = e % 20;
        const coordY = t % 10;
        return getChar(chunkX, chunkY, coordX, coordY);
    }

    const lines = [];
    let currentLine = "";
    for (let y = startY; y <= endY; y++) {
        for (let x = startX; x <= endX; x++) {
            const char = getCharXY(x, y);
            currentLine += char ? char : " "
        }
        lines.push(currentLine);
        currentLine = ""
    }
    return lines.join("\n")
}
