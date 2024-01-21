// complete this js code
// Person constructor function
function Person(name, age) {
  this._name = name;
  this._age = age;
}

// Add greet() method to Person prototype
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this._name}, I am ${this._age} years old.`);
};

// Employee constructor function
function Employee(name, age, jobTitle) {
  // Call the Person constructor to initialize name and age
  Person.call(name,age)
  this._jobTitle = jobTitle;
}

// Inherit the Person prototype in the Employee prototype
// Employee.prototype = Object.create(Person.prototype);

// // Set the constructor property back to Employee
// Employee.prototype.constructor = Employee;

// Add jobGreet() method to Employee prototype
Employee.prototype.jobGreet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};


// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
