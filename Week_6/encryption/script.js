let message = prompt('Input message')
let newMessage= [];

if ((/^[A-Z]+$/.test(message))) {
    for (let i = 0; i < message.length; i++) {
        if (message.charCodeAt(i) <= 77) {
            newMessage.push(String.fromCharCode(message.charCodeAt(i) + 13));
        } else {
            newMessage.push(String.fromCharCode(message.charCodeAt(i) - 13));
        }
    }
    alert(newMessage.join(''))
} else {   
    alert ('We only accept capital letters A - Z')
}