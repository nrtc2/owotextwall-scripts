async function writeTextAt(string, color, wX, wY, wait = 0) {
    function delay(t) {
	    return new Promise(e => setTimeout(e, t))
    }

    let cX = wX,
        cY = wY,
        lines = string.toString().split("\n");
    for (let y = 0; y < lines.length; y++) {
        for (let x = 0; x < lines[y].length; x++) {
            const charInfo = getCharInfoXY(cX, cY);
            const dec = charInfo.deco;
            const curChr = lines[y].charAt(x);
            const fmt = prsFmt(color)
            if (null === charInfo) continue;

            if (charInfo.char !== curChr || charInfo.color !== fmt.color || dec.bold !== fmt.bold || dec.italic !== fmt.italic || dec.underline !== fmt.underline || dec.strike !== fmt.strikethrough) {
                if (curChr !== " " || charInfo.char !== " ") writeCharAt(curChr, curChr !== " " ? color : 0, cX, cY);
                if (wait > 0 && isFinite(wait)) {
                    await delay(wait);
                }
            }
            cX++
        }
        cX = wX, cY++
    }
}
