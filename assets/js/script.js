let a, b, c, d, e;

function visible(){
    const btn = document.querySelector('.upper-text');
    const input = document.querySelector('.loader-first');

    const btn2 = document.querySelector('.str-text');
    const input2 = document.querySelector('.loader-second');

    const btn3 = document.querySelector('.only-alphabet');
    const input3 = document.querySelector('.loader-third');

    const btn4 = document.querySelector('.only-number');
    const input4 = document.querySelector('.loader-four');


    const btn5 = document.querySelector('.spec-symbols');
    const input5 = document.querySelector('.loader-five');

    btn.addEventListener('click', () =>{
        input.classList.toggle('_active');
        a= 1;
    })

    btn2.addEventListener('click', () =>{
        input2.classList.toggle('_active');
        b = 1;
    })

    btn3.addEventListener('click', () =>{
        input3.classList.toggle('_active');
        c = 1;
    })

    btn4.addEventListener('click', () =>{
        input4.classList.toggle('_active');
        d = 1;
    })

    btn5.addEventListener('click', () =>{
        input5.classList.toggle('_active');
        e = 1;
    })


}
visible()

const range = document.querySelector('.volume')

if (range) {
    range.addEventListener('input', show);
}

function show(){
    const num = document.querySelector('.num_volume');
    num.innerHTML = range.value + " nums"
    console.log(range.value);
}

const btnGenerate = document.querySelector('.text-btn');

if (btnGenerate){
    btnGenerate.addEventListener('click', generate)
}

function generate(){
    const out = document.querySelector('.output');
    var result= '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < range.value; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   if (range.value >= 14)
   {
    out.style.left = '300px';

   }
   else if (range.value >= 11)
   {
    out.style.left = '340px';

   }
   else if (range.value >= 9)
   {
        out.style.left = '350px';
   }
   else if (range.value >= 7){
    out.style.left = '380px';

   }
   else{
    out.style.left = '410px';

   }
   out.innerHTML = result;
   console.log(result)
}


//---------------------------------copy password
const copy = document.querySelector('.copy-icon')

if (copy)
{
    copy.onclick = () => {
        var textCopy = document.querySelector('.output')
        if (textCopy.innerHTML != '')
        {
            navigator.clipboard.writeText(textCopy.innerHTML);
            const advert = document.querySelector('.advert');
            advert.classList.add('active');
            setTimeout(() => advert.classList.remove('active'), 1000)
        }
        else{
            alert("first generate!");
        }
    }
}



