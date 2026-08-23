async function writeTextToXY(string, color, wX, wY, bgColor, wait = 0) {
    function delay(t) {
	    return new Promise(e => setTimeout(e, t))
    }

    let cX = wX,
        cY = wY,
        lines = string.toString().split("\n");
    for (let y = 0; y < lines.length; y++) {
        for (let x = 0; x < lines[y].length; x++) {
            const curChr = lines[y].charAt(x);

            writeCharToXY(curChr, curChr !== " " ? color : 0, cX, cY, bgColor);

            if (wait > 0 && isFinite(wait)) {
                await delay(wait);
            }
            cX++
        }
        cX = wX, cY++
    }
}
