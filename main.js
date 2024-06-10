// Assalamualaikum @everyone 👋
// 🚀 Day 25 Challenge: Start Coding! 🚀
// Question 73: Assigning and Updating Variables: Create a function where you declare a variable using let and assign an initial value. Then, update its value within the same function and log both the initial and updated values.
function assigningAndUpdatingVariable() {
    var value = 100;
    console.log("Initial value: ", value);
    value = 250;
    console.log("Updated Value: ", value);
}
assigningAndUpdatingVariable();
console.log("\n");
// Question 74: Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.
function swapValues() {
    var a = 5, b = 10;
    console.log("Before swap: a =", a, "b =", b);
    var val = a;
    a = b;
    b = val;
    console.log("After swap: a =", a, "b =", b);
}
swapValues();
console.log("\n");
// Question 75: Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations. Start with x = 4 and perform a series of operations (addition, subtraction, multiplication, division) on x using compound operators.
function usingCompoundOperators() {
    var x = 4;
    console.log("Initial x: ".concat(x));
    //Adding
    x += 4;
    console.log("After Addition: ".concat(x));
    //Subtraction
    x -= 3;
    console.log("After Subtraction: ".concat(x));
    // Multiplication
    x *= 5;
    console.log("After Multiplication: ".concat(x));
    // Division
    x /= 5;
    console.log("After Division: ".concat(x));
}
usingCompoundOperators();
