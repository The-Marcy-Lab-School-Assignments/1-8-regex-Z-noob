const swapAllCases = (str) => {
  const callback = (letter) => {
    if (/[a-z]/.test(letter)) { 
      return letter.toUpperCase()
    } else if (/[A-Z]/.test(letter)) {
      return letter.toLowerCase()
    }
  };
  return str.replaceAll(/[a-zA-Z]/g, callback)
};

// console.log(swapAllCases('Now What?')) //.toEqual('nOW wHAT?')

module.exports = {
  swapAllCases,
};
