const login = (email, password, callback ) => {
    setTimeout(() => {
        callback(email, password);
    }, 1000);
}

console.log("Start");
login('alan@aln.fr', '123', (email, password) => {
    console.log(email, password);
    // On peut faire des mise à jour du DOM par exemple ici
});
console.log("End");