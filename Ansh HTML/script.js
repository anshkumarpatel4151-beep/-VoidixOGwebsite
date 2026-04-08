// PARTICLES BACKGROUND
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    size: { value: 3 },
    move: { speed: 2 }
  }
});

// FAKE LIVE SUB COUNT
let count = 100;
setInterval(() => {
    count += Math.floor(Math.random() * 5);
    document.getElementById("subs").innerText =
        "Subscribers: " + count;
}, 2000);

// CUSTOM CURSOR
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
});