module.exports = function check(str, bracketsConfig) {
  
  const bracketMap = new Map();
  const stack = [];
  
  bracketsConfig.forEach(([open, close]) => {
    bracketMap.set(open, close);
  });
  

  for (let char of str) {
    if (bracketMap.has(char)) {
     
      if (bracketMap.get(char) === char && stack.length > 0 && stack[stack.length - 1] === char) {
       
        stack.pop();
      } else {
        stack.push(char);
      }
    } else {
     
      if (stack.length === 0 || bracketMap.get(stack.pop()) !== char) {
        return false;
      }
    }
  }
  
  return stack.length === 0;
}
