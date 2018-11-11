let message = prompt('Input message');
let newMessage = '';

if ((/^[A-Z]+$/.test(message))) {
    for (let i = 0; i < message.length; i++) {
        newMessage += String.fromCharCode((message.charCodeAt(i) % 26) + 65);
    }
    alert(newMessage);
} else {
    alert('We only accept capital letters A - Z')
}