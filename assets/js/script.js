var first = document.querySelector('.upper-text');
var firsttwo = document.querySelector('.loader-first');

if (first){
first.addEventListener('click', () => {
    firsttwo.classList.add('_active');
    first.addEventListener('click', () => {
        firsttwo.classList.remove('_active')
    })
});
}