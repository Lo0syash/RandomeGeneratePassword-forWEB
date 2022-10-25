// --------modale window in start

const main = document.querySelector('.main');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');


if (localStorage.getItem('number') == null){
  function broke(){
    const popup = document.querySelector('.hello-popup').classList.add('active')
    const block = 1;
    localStorage.setItem('number', block)
    main.classList.remove('active')
    header.classList.remove('active')
    footer.classList.remove('active')
  }

  setTimeout(broke, 3000)
}

else{
  const popup = document.querySelector('.hello-popup');
  popup.style.cssText = 'display: none;'
  main.classList.remove('active')
  header.classList.remove('active')
  footer.classList.remove('active')
  console.log("exit")
}


// -----------------------------------generate


const num = document.querySelector('.checkbox-num');
const symbols = document.querySelector('.checkbox-sym');
const upper = document.querySelector('.checkbox-upper');
const lower = document.querySelector('.checkbox-lower');

const label_num = document.querySelector('.num');
const label_sym = document.querySelector('.sym');
const label_upper = document.querySelector('.upper');
const label_lower= document.querySelector('.lower');


const out = document.querySelector(".output");

const range = document.querySelector('.range-lenth');

if(range){
  range.addEventListener("input", () =>{
    const numer = document.querySelector(".num-range");
    numer.innerHTML = range.value;
  })
}


const btn_generate = document.querySelector('.icon-generate').addEventListener('click', () =>{
  var result = "";
  const out = document.querySelector('.textbox');
  if (upper.checked) {
      var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  } else if (lower.checked) {
      var characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  }  else if (num.checked) {
      var characters = "0123456789";
  } else if (symbols.checked) {
      var characters = "!@#$%^&*()_+=-/?.,><:;{}[]|//`~№";
  } else {
      var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  }
    var charactersLength = characters.length;
  for (var i = 0; i < range.value; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  
  out.innerHTML = result;
});




//---------------------------------copy password
const copy = document.querySelector(".btn-copy");

if (copy) {
  copy.onclick = () => {
    var textCopy = document.querySelector(".textbox");
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


// ----------------------------------theme

const moon = document.querySelector('.moon').addEventListener('click', () =>{
  const moon_active = document.querySelector('.btn-theme-moon').classList.add('active')
  const sun = document.querySelector('.sun').classList.add('active')
  const body = document.querySelector('.body').classList.add('dark');
  const block = document.querySelector('.block').classList.add('dark');
  const logo = document.querySelector('.logo-text-name').classList.add('dark');
  const length = document.querySelector('.logo-container-length').classList.add('dark');
  const num = document.querySelector('.num').classList.add('dark');
  const sym = document.querySelector('.sym').classList.add('dark');
  const upper = document.querySelector('.upper').classList.add('dark');
  const lower = document.querySelector('.lower').classList.add('dark');

  const black = document.querySelector('.black').classList.add('nope');
  const light = document.querySelector('.light').classList.add('nope');

  const gen_black = document.querySelector('.gen-black').classList.add('nope');
  const gen_light = document.querySelector('.gen-light').classList.add('nope');

  const icon_black_copy = document.querySelector('.icon-black-copy').classList.add('nope');
  const icon_light_copy = document.querySelector('.icon-light-copy').classList.add('nope');

})

const sun = document.querySelector('.sun').addEventListener('click', () =>{
  const moon_active = document.querySelector('.btn-theme-moon').classList.remove('active')
  const sun = document.querySelector('.sun').classList.remove('active')
  const body = document.querySelector('.body').classList.remove('dark');
  const block = document.querySelector('.block').classList.remove('dark');
  const logo = document.querySelector('.logo-text-name').classList.remove('dark');
  const length = document.querySelector('.logo-container-length').classList.remove('dark');

  const gen_black = document.querySelector('.gen-black').classList.remove('nope');
  const gen_light = document.querySelector('.gen-light').classList.remove('nope');

  const icon_black_copy = document.querySelector('.icon-black-copy').classList.remove('nope');
  const icon_light_copy = document.querySelector('.icon-light-copy').classList.remove('nope');
})


// -------------------------------------info

const btn_info = document.querySelector('.container-icon-info').addEventListener('click', () =>{
  const info = document.querySelector('.container-info').classList.add('active');

})

const btn_close = document.querySelector('.btn-close-info').addEventListener('click', () => {
  const info = document.querySelector('.container-info').classList.remove('active');
})





















// function generate(){
//   var result = "";
//   if (upper.checked) {
//     var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//   } else if (lower.checked) {
//     var characters = "abcdefghijklmnopqrstuvwxyz0123456789";
//   }  else if (num.checked) {
//     var characters = "0123456789";
//   } else if (symbols.checked) {
//     var characters = "!@#$%^&*()_+=-/?.,><:;{}[]|//`~№";
//   } else {
//     var characters =
//       "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   }
//   var charactersLength = characters.length;
//   for (var i = 0; i < range.value; i++) {
//     result += characters.charAt(Math.floor(Math.random() * charactersLength));
//   }
// }


// let a, b, c, d, e;
// var btn = document.querySelector(".upper-case");
// var btn2 = document.querySelector(".lower-case");
// var btn3 = document.querySelector(".alphabet-case");
// var btn4 = document.querySelector(".only-number");
// var btn5 = document.querySelector(".special-case");

// const range = document.querySelector(".volume");

// if (range) {
//   range.addEventListener("input", show);
// }

// function show() {
//   const num = document.querySelector(".num_volume");
//   num.innerHTML = range.value + " nums";
//   console.log(range.value);
// }

// const btnGenerate = document.querySelector(".text-btn");

// if (btnGenerate) {
//   btnGenerate.addEventListener("click", generate);
// }

// function generate() {
//   const out = document.querySelector(".output");
//   var result = "";
//   if (btn.checked) {
//     var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//   } else if (btn2.checked) {
//     var characters = "abcdefghijklmnopqrstuvwxyz0123456789";
//   } else if (btn3.checked) {
//     var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//   } else if (btn4.checked) {
//     var characters = "0123456789";
//   } else if (btn5.checked) {
//     var characters =
//       'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-/?.,><":;{}[]|//`~№';
//   } else {
//     var characters =
//       "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   }
//   var charactersLength = characters.length;
//   for (var i = 0; i < range.value; i++) {
//     result += characters.charAt(Math.floor(Math.random() * charactersLength));
//   }
//   if (range.value >= 14) {
//     out.style.left = "300px";
//   } else if (range.value >= 11) {
//     out.style.left = "340px";
//   } else if (range.value >= 9) {
//     out.style.left = "350px";
//   } else if (range.value >= 7) {
//     out.style.left = "380px";
//   } else {
//     out.style.left = "410px";
//   }
//   out.innerHTML = result;
//   console.log(result);
// }

//---------------------------------copy password
// const copy = document.querySelector(".copy-icon");

// if (copy) {
//   copy.onclick = () => {
//     var textCopy = document.querySelector(".output");
//     if (textCopy.innerHTML != "") {
//       navigator.clipboard.writeText(textCopy.innerHTML);
//       const advert = document.querySelector(".advert");
//       advert.classList.add("active");
//       setTimeout(() => advert.classList.remove("active"), 1000);
//     } else {
//       alert("first generate!");
//     }
//   };
// }

///dark and light mode

// var btnMode = document.querySelector(".theme-mode");

// btnMode.addEventListener("click", () => {
//   let theme = document.querySelector(".theme-link");
//   if (theme.getAttribute("href") == "assets/css/style.css") {
//     theme.href = "assets/css/style-light.css";
//   } else theme.href = "assets/css/style.css";
// });
