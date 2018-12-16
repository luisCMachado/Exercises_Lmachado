let par1 = document.querySelector('#paragraph1')
let par2 = document.querySelector('#paragraph2')
let i=0;

function changeColor() {
    var color = ["red", "black"];
    par1.style.color = color[i];
    i++;
    if (i === color.length) {
        i = 0;
    }
    par2.style.color = color[i];
}


setInterval(changeColor, 1000);