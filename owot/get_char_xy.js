function getCharXY(x, y) {
    const tileX = Math.floor(x / 16),
        tileY = Math.floor(y / 8),
        charX = (x % 16 + 16) % 16, // use true modulo
        charY = (y % 8 + 8) % 8;
    return getChar(tileX, tileY, charX, charY);
}
