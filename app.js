/**
 * Calculator class
 * descriptopn: It will return the value base on calculate type which user enter. 
 * note: i ca return also nagitave value if user enter the first param small then second. 
 * @params {string} a value - user have to pass while initialize the class in the constructor fucntion
 * @params {string} b value  ,, ,, ,, 
 * @constructor
 */

function Calculator(a, b) {
    this.a = a;
    this.b = b;
}

Calculator.prototype.add = function() {
    return this.a + this.b;
}

Calculator.prototype.divide = function() {
    return (this.a / this.b);
}

Calculator.prototype.multiply = function() {
    return this.a * this.b;
}

Calculator.prototype.substract = function() {
    return this.a - this.b;
}


Calculator.prototype.calculate = function(calculateType) {
    switch (calculateType) {
        case 'add':
            return this.add();
            break;
        case 'multiply':
            return this.multiply()
            break;
        case 'divide':
            return this.divide();
            break;
        case 'substract':
            return this.substract();
            break;
        default:
            return "Please inter the correct data or calculate Type";
    }
}
