// Immediately Invoked Function Expression (IIFE)

(function database() {
    // named IIFE
    console.log("DB CONNECTED");
})();

((name) => {
    // simple / unnamed IIFE
    console.log(`Second DB Connection by ${name}`);
})("Abrar");