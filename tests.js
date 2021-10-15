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
    it('should return a type of string', function(){
        expect(typeof sayHello()).toBe("string");
    })
});