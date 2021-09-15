
const login = (email, password, callback ) => {
    setTimeout(() => {
        callback(email);
    }, 1000);
}

console.log('avant dans le code');

login('alan@alan.fr', 1234567890, email => {
    // main.innerHTML = email; // on rafraichit le DOM 
    console.log(email);
} );

console.log('après login dans le code');
