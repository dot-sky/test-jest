const ALPHA = "abcdefghijklmnopqrstuvwxyz";

function isAlphabetic(char) {
  return /^[a-zA-Z]$/.test(char);
}

function isUpperCase(char) {
  return char.toUpperCase() === char && char.toLowerCase() !== char;
}

function mod(n, m) {
  return ((n % m) + m) % m;
}

function caesarCipher(str, shift) {
  let encryptedStr = "";
  let char, alphaIndex, shiftedChar;

  for (let i = 0; i < str.length; i++) {
    char = str[i];

    if (isAlphabetic(char)) {
      alphaIndex = char.toLowerCase().charCodeAt(0) - ALPHA.charCodeAt(0);
      shiftedChar = ALPHA[mod(alphaIndex + shift, ALPHA.length)];

      if (isUpperCase(char)) shiftedChar = shiftedChar.toUpperCase();
    } else {
      shiftedChar = char;
    }

    encryptedStr += shiftedChar;
  }
  return encryptedStr;
}

export { caesarCipher };
