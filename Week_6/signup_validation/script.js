let eMail = prompt('Input message').trim();
let validation = /^\w+\@(\w+\.)+(\w{2,3})+$/;

if (validation.test(String(eMail)) == true) {
    alert('The email is valid, proceed with the email:' + eMail);
} else {
   alert('Please insert a valid email');
}