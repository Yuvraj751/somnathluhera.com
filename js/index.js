let text = document.getElementById('music');
let textArr=['Classical', 'punjabi', 'bollywood '];


// function typeWriter() {

let str = '';
let i = 0;
let j = 0;

// console.log(textArr[j].length);

function typeWriter() {
    setInterval(() => {
        if (textArr[j].length > i) {
            text.innerHTML += textArr[j][i]
            i++;
        }
        else {
            i = 0;
            j++;
            text.innerHTML = ''
            if (j == 3) {
                j = 0;
            }
        }
    }, 500);

}
typeWriter();


let ham = document.querySelector('.ham-btn');

ham.addEventListener('click', ()=>{

console.log(nav.classList.toggle('open'));
console.log(nav.classList);
})