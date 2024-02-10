 const start= ()=> {
    console.log("running");
    
function num(min, max) {
    return Math.random() * (max - min) + min;
}

const canva = document.querySelector('#background');
var n=0;
const bubblecreateor = setInterval(() => {
    const gola = document.createElement('div');
    gola.classList.add('gola');
    n = num(1, 200);
    gola.style.height = n + 'px';
    gola.style.width = n + 'px';

    gola.style.right = num(0, 1500) + 'px';
    canva.appendChild(gola);
}, 200);

setTimeout(() => {
// stylesheet = document.styleSheets[0];
// stylesheet.insertRule("   background-color: pink;",4);

    clearInterval(bubblecreateor)
}, 5000);

}

export default start;
