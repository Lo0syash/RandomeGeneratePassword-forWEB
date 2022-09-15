let a, b, c, d, e;
var btn = document.querySelector(".upper-case");
var btn2 = document.querySelector(".lower-case");
var btn3 = document.querySelector(".alphabet-case");
var btn4 = document.querySelector(".only-number");
var btn5 = document.querySelector(".special-case");

const range = document.querySelector(".volume");

if (range) {
  range.addEventListener("input", show);
}

function show() {
  const num = document.querySelector(".num_volume");
  num.innerHTML = range.value + " nums";
  console.log(range.value);
}

const btnGenerate = document.querySelector(".text-btn");

if (btnGenerate) {
  btnGenerate.addEventListener("click", generate);
}

function generate() {
  const out = document.querySelector(".output");
  var result = "";
  if (btn.checked) {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  } else if (btn2.checked) {
    var characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  } else if (btn3.checked) {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  } else if (btn4.checked) {
    var characters = "0123456789";
  } else if (btn5.checked) {
    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-/?.,><":;{}[]|//`~№';
  } else {
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  }
  var charactersLength = characters.length;
  for (var i = 0; i < range.value; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  if (range.value >= 14) {
    out.style.left = "300px";
  } else if (range.value >= 11) {
    out.style.left = "340px";
  } else if (range.value >= 9) {
    out.style.left = "350px";
  } else if (range.value >= 7) {
    out.style.left = "380px";
  } else {
    out.style.left = "410px";
  }
  out.innerHTML = result;
  console.log(result);
}

//---------------------------------copy password
const copy = document.querySelector(".copy-icon");

if (copy) {
  copy.onclick = () => {
    var textCopy = document.querySelector(".output");
    if (textCopy.innerHTML != "") {
      navigator.clipboard.writeText(textCopy.innerHTML);
      const advert = document.querySelector(".advert");
      advert.classList.add("active");
      setTimeout(() => advert.classList.remove("active"), 1000);
    } else {
      alert("first generate!");
    }
  };
}

///dark and light mode

var btnMode = document.querySelector(".theme-mode");

btnMode.addEventListener("click", () => {
  let theme = document.querySelector(".theme-link");
  if (theme.getAttribute("href") == "assets/css/style.css") {
    theme.href = "assets/css/style-light.css";
  } else theme.href = "assets/css/style.css";
});
