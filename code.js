// helloWorld function 
const helloWorld = function() {
    return "helloWorld, World!";
}

// sayHello function
function sayHello(input) {
    if (input === undefined || input === true || input === false) {
        return "Hello, World!";
    }
    return "Hello, " + input + "!";
}