// requires write_text_at.js

!function() {
    let å = prompt("enter expression (x is relative)"); // evaluator
    let ľ = 1; // zoom (value 1 is 100%)

    for (let y = -10; y < 10; y++)
        for (let x = -20; x < 20; x++) writeTextAt(".", 30, x, y) // render

    for (let e = -20; e < 20; e++) {

        const x = e / ľ / 2;
        function mod(num, den) {
            return (num % den + den) % den
        }
        let ø;
        try {
            ø = Math.round(eval(å) * ľ) // evaluate result
        } catch (f) {
            writeTextAt(f instanceof SyntaxError ? "Syntax error" : "Error", 4, -20, -7); // check errors
            ø = 0 // fallback
        }

        writeTextAt(ø >= 10 ? "^" : ø <= -9 ? "v" : "#", 0, e, -(ø >= 10 ? 10 : ø <= -9 ? -9 : ø)) // clamp the graph
    }

    writeTextAt(`graphulator
${å}
zoom ${ľ}x`, 0, -20, -10)
}()
