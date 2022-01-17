module.exports = function check(str, bracketsConfig) {
  const bracketsArray = str.split('');
  const openBrackets = bracketsConfig.map(bracket => bracket[0]);
  const bracketsPairs = Object.fromEntries(bracketsConfig);
  let stack = [];

  for (let bracket of bracketsArray) {
    if (openBrackets.includes(bracket)) {
      if (bracketsPairs[bracket] != bracket) {
        stack.push(bracket);
      }

      if (bracketsPairs[bracket] === bracket) {
        if (!stack.includes(bracket)) {
          stack.push(bracket);
        } else if (bracket === stack[stack.length - 1]) {
          stack.pop();
        } else {
          return false;
        }
      }

    } else if (bracket === bracketsPairs[stack[stack.length - 1]]) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
}