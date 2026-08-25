(function() {
	const div = document.createElement("div"),
		execButton = document.createElement("button"),
		field = document.createElement("textarea"),
		outputs = document.createElement("div");

	execButton.textContent = "Evaluate";

	div.style.position = "absolute";
	div.style.zIndex = "9".repeat(308);
	div.style.transform = "translateY(-50px)";

	execButton.addEventListener("click", function() {
        const out = document.createElement("pre"),
        	inp = document.createElement("pre"),
            val = field.value;

        inp.textContent = val;

		try {
            out.textContent = eval.call(globalThis, val);
			outputs.appendChild(inp);
			outputs.appendChild(out)
		} catch (e) {
            out.textContent = e;
			outputs.appendChild(inp);
			outputs.appendChild(out)
		}

		field.value = ""
	});
	div.addEventListener("click", function() {
		worldFocused = false
	});

	div.appendChild(outputs);
	div.appendChild(field);
	div.appendChild(execButton);
	document.body.appendChild(div);
})();
