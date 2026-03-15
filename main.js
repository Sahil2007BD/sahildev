const text = "Future Software Developer";

let index = 0;

function type() {
    if (index < text.length) {
        document.getElementById("typing").textContent += text.charAt(index);
        index++;
        setTimeout(type, 70);
    }
}

type();