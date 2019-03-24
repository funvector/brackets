module.exports = function check(str, bracketsConfig) {
  var stack = [];
  for (var i = 0; i < str.length; i++) {
    var char = str.charAt(i);
    var pair = getPair(char, bracketsConfig);
    if (pair[0] === pair[1]) {
      if (!stack || !stack.includes(char)) {
        stack.push(char);
      } else {
        var pop = stack.pop();
        if (pop != char) {
          return false;
        }
      }
    } else {
      if (pair[0] === char) {
        stack.push(char);
      } else {
        if (!stack) {
          return false;
        }

        var pop = stack.pop();
        if (pair[0] !== pop) {
          return false;
        }
      }
    }
  }

  return stack.length == 0;
}

function getPair(symbol, bracketsConfig) {
  var pair;
  for (j = 0; j < bracketsConfig.length; j++) {
    if (bracketsConfig[j][0] === symbol || bracketsConfig[j][1] === symbol) {
      pair = bracketsConfig[j];
    }
  }

  return pair;
}
