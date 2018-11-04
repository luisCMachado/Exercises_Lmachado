var name = prompt('Write your name!');
var condition = prompt('Do you want to leave a quote for humanity to reflect upon such wisdom?');
var myQuote = [];

if (condition == 'yes') {
   var numWords= prompt('number of words your quote has');
   alert ('Tell me your quote word by word');
   getQuote();

} else if (condition == 'no'){
    alert ("See you next time, humanity will surely lost...");
    return true;
} else {
    alert('We only accept yes or no as an answer');
    return true;
}

function getQuote() {
    for (var i = 0; i < numWords; i++) {
        var word = prompt('Words');
        myQuote.push(word);
    }
    var quote = myQuote.join(' ');
    alert("Your quote is: '" + quote + ".' - " + name);
}