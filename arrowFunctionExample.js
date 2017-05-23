/*
 * @author: Kundan Singh
 * kundanvishen@gmail.com
 * 
 */

// ES5 Example
var user = {
    name: "John",

    handleMessage: function(message, handler) {
        handler(message);
    },

    getName: function() {
        var that = this;
        this.handleMessage("Hello, ", function(message) {
            console.log(message + that.name);
        });
    }
};

user.getName();

// ES6 Example
var userES6 = {
    name: "John",

    handleMessage: function(message, handler) {
        handler(message);
    },

    getName: function() {
        this.handleMessage("Hello, ", message => console.log(message + that.name));
    }
};