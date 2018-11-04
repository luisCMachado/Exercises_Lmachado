var retVal = prompt("run loop?");

if (retVal == 'Yes' || retVal == 'yes') {
    for( var i = 1; i <= 40; i++ ) {
        if( ( i % 3 ) === 0 && ( i % 5 ) === 0 ) {
            alert ("Hey Yo");
        } else if ( ( i % 3 ) === 0 ) {
            alert ("Hey");
        } else if ( ( i % 5 ) === 0 ) {
            alert ("Yo");
        } else {
            alert ( i);
        }
    }
} else {
    alert ("User does not want to continue!");
}