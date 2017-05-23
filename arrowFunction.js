/*
 * @author: Kundan Singh
 * kundanvishen@gmail.com
 * 
 */

// ES5 Method:
var createGreeting = function(message, name) {
    return message + name;
};

// ES6 Method: 
var createGreetingES6 = (message, name) => {
    return message + name;
};

// ES6 Shorthand Method without return statement
var createGreetingES6ShortHand = (message, name) => message + name;

// ES6 UltraShort Method without using return statement
var squared = x => x * x;