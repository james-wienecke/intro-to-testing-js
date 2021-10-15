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