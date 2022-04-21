let p = prompt("Please enter expression:");
function postfixEval(string) {
  let stack = [];
  let ch; // current char
  for (var k = 0, length = string.length; k < length; k++) {
    ch = string[k];
    // if it's a value, push it onto the stack
    if (/\d/.test(ch))
      stack.push(ch);
    // else if it's an operator
    else if (ch in operators) {
      let b = +stack.pop();
      let a = +stack.pop();
      let value = operators[ch](a, b);
      stack.push(value);
    }
  }
  if (stack.length > 1)
    throw "ParseError: " + string + ", stack: " + stack;
  return stack[0];
}
// operators
let operators = {
  "+": function (a, b) 
  { 
    return a + b 
  },
  "-": function (a, b) 
  { 
    return a - b 
  },
  "*": function (a, b) 
  { 
    return a * b 
  },
  "/": function (a, b) 
  { 
    return a / b 
  }
};
// tests
// document.write(postfixEval(p));
document.getElementById('stack').innerHTML="answer is: "+postfixEval(p);
//   console.log(postfixEval("5 3 1 * + 9 -"));