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
    return parseFloat(input) % 2 === 0
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

