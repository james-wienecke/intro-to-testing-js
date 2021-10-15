// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "helloWorld, World!" when executed', function() {
      expect(helloWorld()).toBe("helloWorld, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function() {
       expect(typeof sayHello).toBe('function');
    });
    it('should return a type of string', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed with "Jane" as a parameter', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed with "Alex" as a parameter', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed with "Pat" as a parameter', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return "Hello, World!" when given no parameter', function () {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when given boolean parameters', function () {
        expect(sayHello(true)).toBe("Hello, World!");
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when given null as a parameter', function () {
        expect(sayHello(null)).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when given "" (empty string) as a parameter', function () {
        expect(sayHello("")).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when given any non-string value as a parameter', function () {
        expect(sayHello(4.6)).toBe("Hello, World!");
        expect(sayHello("2.5")).toBe("Hello, World!");
        expect(sayHello(["big"])).toBe("Hello, World!");
    });
    it('should return "Hello, [string result of function]!', function () {
        expect(sayHello(helloWorld())).toBe("Hello, helloWorld, World!!")
    })
});

describe('isFive', function () {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should return a type of boolean', function() {
        expect(typeof isFive()).toBe("boolean");
    });
    it('should return true when passed the number 5 and false when passed any other number', function () {
        expect(isFive(5)).toBe(true);
        expect(isFive(4)).toBe(false);
        expect(isFive(-10)).toBe(false);
        expect(isFive(-5)).toBe(false);
        expect(isFive("5")).toBe(true);
    });
    it('should return false when passed any value besides the number 5', function () {
        expect(isFive("apple")).toBe(false);
        expect(isFive(false)).toBe(false);
        expect(isFive([5,10,15])).toBe(false);
    });
});

describe('isEven', function () {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should return a type of boolean', function () {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return true for even numbers and false for odd numbers', function () {
        expect(isEven(2)).toBe(true);
        expect(isEven(-4)).toBe(true);
        expect(isEven(3)).toBe(false);
        expect(isEven("8")).toBe(true);
    });
    it('should return false for values that are not integer numbers', function () {
        expect(isEven("banana")).toBe(false);
        expect(isEven(true)).toBe(false);
        expect(isEven(false)).toBe(false);
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when executed without an argument', function () {
        expect(isEven()).toBe(false);
    });
});
describe('isVowel', function (){
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should return a type of boolean', function () {
        expect(typeof isVowel()).toBe('boolean');
    });
    it('should return true for single character lowercase vowels in strings', function () {
        expect(isVowel("a")).toBe(true);
        expect(isVowel("e")).toBe(true);
        expect(isVowel("b")).toBe(false);
        expect(isVowel("i")).toBe(true);
        expect(isVowel("o")).toBe(true);
        expect(isVowel("u")).toBe(true);
    });
    it('should return true for single character uppercase vowels in strings', function () {
        expect(isVowel("A")).toBe(true);
        expect(isVowel("E")).toBe(true);
        expect(isVowel("I")).toBe(true);
        expect(isVowel("O")).toBe(true);
        expect(isVowel("U")).toBe(true);
        expect(isVowel("G")).toBe(false);
    });
    it('should return false for strings longer than 1 character', function () {
        expect(isVowel("Apple")).toBe(false);
        expect(isVowel("Potato")).toBe(false);
        expect(isVowel("people")).toBe(false);
        expect(isVowel("the kingdom of albion")).toBe(false);
    });
    it('should return false for all input data types that are not strings', function () {
        expect(isVowel(['o'])).toBe(false);
        expect(isVowel(null)).toBe(false);
        expect(isVowel(false)).toBe(false);
        expect(isVowel(45)).toBe(false);
    });
});