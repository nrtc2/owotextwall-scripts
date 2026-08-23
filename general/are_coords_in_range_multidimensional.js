function coordsInRange(c, c1, c2) {
    if (![c, c1, c2].every(Array.isArray)) {
        throw new TypeError("Expected Array type for all arguments");
    }

    const dims = c.length;
    if (dims === 0) {
        throw new RangeError("Target coordinate array must not be empty");
    }

    if (c1.length < dims || c2.length < dims) {
        throw new RangeError(`Range bounds must have at least ${dims} dimensions to match target coordinate`);
    }

    return c.every((val, i) => {
        const min = Math.min(c1[i], c2[i]);
        const max = Math.max(c1[i], c2[i]);
        return val >= min && val <= max;
    });
}
