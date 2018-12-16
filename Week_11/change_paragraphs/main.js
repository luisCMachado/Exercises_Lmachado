let paragraph = document.getElementsByTagName('p')

for (let i = 0; i < paragraph.length; i++) {
    paragraph[i].style.color = getRandomColor();  
}

function getRandomColor() {
	let rgb = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
	return (rgb);
}