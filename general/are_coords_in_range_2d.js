function coordsInRange2D(c, c1, c2) {
    if (![c, c1, c2].every(a => Array.isArray(a))) {
        throw new TypeError("Expected Array type for all arguments");
    }

    if (![c, c1, c2].every(a => a.length >= 2)) {
        throw new RangeError("Found argument with length less than two");
    }

    const minX = Math.min(c1[0], c2[0]);
    const maxX = Math.max(c1[0], c2[0]);
    const minY = Math.min(c1[1], c2[1]);
    const maxY = Math.max(c1[1], c2[1]);

    return c[0] >= minX && c[0] <= maxX && c[1] >= minY && c[1] <= maxY;
}
