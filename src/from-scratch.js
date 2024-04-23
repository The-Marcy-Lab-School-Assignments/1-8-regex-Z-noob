/** FEEDBACK: Just one small bit of feedback, when you use the flag g, you do not need to use .replaceAll().   */
const helloWorldRegex = (str) => {
  return /Hello world/gi.test(str);
};
// str.match(/[Hello world]/gi)
const hasAVowel = (str) => {
  return /[aeiou]/gi.test(str);
};

const hasCatsOrDogs = (str) => {
  return /cats|dogs/gi.test(str);
};

const hasVowelStart = (str) => {
  return /^[aeiou]/gi.test(str);
};

const hasPunctuationEnd = (str) => {
  return /[?!.]$/g.test(str);
};

const hasNothingOrDigits = (str) => {
  return /^\s*\d*$/gi.test(str);
};
// console.log(hasNothingOrDigits('123abc'))
// console.log(hasNothingOrDigits(''))
const hasNoFlippers = (str) => {
  return /^[^BCcDEHIKOoXxl]*$/.test(str);
};

const isValidEmail = (str) => {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(str);
};

const isValidPhoneNumber = (str) => {
  return /^[(]?\d{3}[)]?[\s\.-]+\d{3}[\s\.-]+\d{4}$/.test(str);
};

const matchAllNumbers = (str) => {
  return str.match(/[\d]+/g) === null ? [] : str.match(/[\d]+/g);
};

const matchAllNumbersAsNumbers = (str) => {
  const arrFilter = str.match(/[\d]+/g);
  if (arrFilter === null) {return []}
  else {return arrFilter.map((num) => +num)};
};

const matchAllWords = (str) => {
  return str.match(/([a-zA-Z][']?)+/g) === null ? [] : str.match(/([a-zA-Z][']?)+/g);
};

const replaceAllNumbers = (str) => {
    return str.replaceAll(/[\d]+/g, '???')
};

const fixFileName = (str) => {
  return str.replaceAll(/[\s]+/g, '_')  === null ? [] : str.replaceAll(/[\s]+/g, '_');
};

const nameRedacter = (str) => {
  return str.replaceAll(/\w[A-Z^IA]+/g, 'REDACTED')
};

const camelToSnakeCase = (str) => {
  const callback = (letter) => {return `_${letter.toLowerCase()}`}
  return str.replaceAll(/[A-Z]/g, callback)
};

module.exports = {
  helloWorldRegex,
  hasAVowel,
  hasCatsOrDogs,
  hasVowelStart,
  hasPunctuationEnd,
  hasNothingOrDigits,
  hasNoFlippers,
  isValidEmail,
  isValidPhoneNumber,

  matchAllNumbers,
  matchAllNumbersAsNumbers,
  matchAllWords,

  replaceAllNumbers,
  fixFileName,
  nameRedacter,
  camelToSnakeCase,
};
