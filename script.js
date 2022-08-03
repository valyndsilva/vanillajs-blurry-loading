const loadingText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let loader = 0; //start loader from 0
let int = setInterval(blurring, 30); //milliseconds
function blurring(){
    loader++
    if(loader > 99){
        clearInterval(int);
    }
    loadingText.innerText = `${loader}%`;
    loadingText.style.opacity = scale(loader, 0, 100, 1, 0); //map a range of numbers (load:0 to 100) to another range of numbers(opacity: 1 to 0)
    bg.style.filter = `blur(${scale(loader, 0, 100, 30, 0)}px)`// bg from 30px to 0px filter
    // console.log(loader);
}
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

