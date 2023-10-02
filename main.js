import './style.css';

document.querySelector(".button2").addEventListener("click", function () {
    helptip(this);
});

function helptip(t) {
    helptip.v = 0;
    let b = t.children[(t.children.length - 1)];
    if (b.style.display === "block") {
        b.style.display = "none";
    } else {
        helptipx();
        b.style.display = "block";
        helptip.v = 1;
    }
}

function helptipx() {
    if (helptip.v === 1) {
        helptip.v = 0;
        return;
    }
    let s = document.querySelectorAll(".helptip");
    for (let i = 0; i < s.length; i++) {
        s[i].children[(s[i].children.length - 1)].style.display = "none";
    }
}

let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
