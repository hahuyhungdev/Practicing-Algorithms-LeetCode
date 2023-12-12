//'(', ')', '{', '}', '[' and ']
// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

// input: s = "{[]}"
// Output: true
var isValid = function (s) {
  const stack = [];
  const pairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let i = 0; i < s.length; i++) {
    let valCurrent = s[i];
    console.log(`index: ${i}`, stack, "val:", valCurrent, pairs[valCurrent]);
    if (pairs[valCurrent]) {
      stack.push(pairs[valCurrent]);
    } else if (valCurrent !== stack.pop()) {
      console.log("case");
      return false;
    }
  }
  return !stack.length;
};
console.log(isValid("()"));
