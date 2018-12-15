var textArea = document.querySelector('#mytextarea');
var paragraph = document.querySelector('#myparagraph');

textArea.addEventListener('input', function(){
    paragraph.textContent = textArea.value;
});