module.exports = function check(str, bracketsConfig) {
  // your solution
  if(str.length % 2 !== 0) {
    return false
  }
  let stack = []
  let brackets = {}
  let openBrackets = [...new Set()]
  for(let [open, close] of bracketsConfig) {
    brackets[close] = open
    openBrackets.push(open)
  }
  for(let bracket of str) {
     if(openBrackets.includes(bracket)) {
       stack.push(bracket)
     } else {
       if(stack.length === 0) {
         return false
       }
     }
    if(brackets.hasOwnProperty(bracket)) {
       const lastBracket = stack[stack.length -1]
       if(lastBracket !== brackets[bracket]) {
         return false
       }else {
         stack.pop()
       }
     }
  }
  return true
}
