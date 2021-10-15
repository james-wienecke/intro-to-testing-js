// helloWorld function 
const helloWorld = function() {
    return "helloWorld, World!";
}

// sayHello function
function sayHello(input) {
    if (input === undefined || input === null || typeof input === 'boolean' || input === "" || !isNaN(input)
    || typeof input === 'object') {
        return "Hello, World!";
    }
    return "Hello, " + input + "!";
}

function isFive(input) {
    if (Number(input) === 5) {
        return true;
    } else {
        return false;
    }
}

function isEven(input) {
    // check input for even number. also requires input to be either of type number OR
    // a string that can be resolved to a number.
    if (input % 2 === 0 && (typeof input === 'number'
        || (typeof input === 'string' && !isNaN(input)))) {
        return true;
    }
    return false;
}

function isVowel(input) {
    if (typeof input === 'string' && input.length === 1) {
        switch (input.toLowerCase()) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                return true;
        }
    }
    return false;
}