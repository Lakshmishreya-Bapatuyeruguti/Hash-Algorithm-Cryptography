//dividing input string into blocks
function divideIntoBlocks(inputString) {
  let i = 0;
  //Up until 55 val result would be zero
  let block = ((inputString.length + 8) >> 6) + 1;
  let size = block * 16;
  let totalBlocks = new Array(size);
  //   Adding padding
  for (i = 0; i < size; i++) {
    totalBlocks[i] = 0;
  }
  //converting string values in ascii values
  for (i = 0; i < inputString.length; i++) {
    totalBlocks[i >> 2] =
      totalBlocks[i >> 2] | (inputString.charCodeAt(i) << (24 - (i % 4) * 8));
  }
  totalBlocks[i >> 2] = totalBlocks[i >> 2] | (0x80 << (24 - (i % 4) * 8));
  //   Adding length of string as well
  totalBlocks[size - 1] = inputString.length * 8;
  return totalBlocks;
}
//Adding Values
function add(value1, value2) {
  // Extracting Lower 16 bits of each value
  let lower = (value1 & 0xffff) + (value2 & 0xffff);
  // Extracting higher 16 bits of each value by right shifting by 16 bits
  let higher = (value1 >> 16) + (value2 >> 16) + (lower >> 16);
  return (higher << 16) | (lower & 0xffff);
}

// Processing Functions for every iteration
function process(t, b, c, d) {
  if (t < 20) {
    return (b & c) | (~b & d);
  }
  if (t < 40) {
    return b ^ c ^ d;
  }
  if (t < 60) {
    return (b & c) | (b & d) | (c & d);
  }
  return b ^ c ^ d;
}

// Rotate left Function
function rotateLeft(value, shiftBy) {
  return (value << shiftBy) | (value >>> (32 - shiftBy));
}

// Additive Constant
function K(t) {
  if (t < 20) {
    return 1518500249;
  }
  if (t < 40) {
    return 1859775393;
  }
  if (t < 60) {
    return -1894007588;
  }
  return -899497514;
}
// Converting into hexadeximal values
let hexCharacters = "0123456789abcdef";
function intoHexaValue(value) {
  let hexvalue = "";
  for (let i = 7; i >= 0; i--) {
    hexvalue += hexCharacters.charAt((value >> (i * 4)) & 0x0f);
  }
  return hexvalue;
}
//sha 1 Function
function sha1Hash() {
  let inpString = document.getElementById("strVal").value;
  let blockValue = divideIntoBlocks(inpString);
  let w = new Array(80);
  // Chaining variables
  let a = 1732584193;
  let b = -271733879;
  let c = -1732584194;
  let d = 271733878;
  let e = -1009589776;

  for (let i = 0; i < blockValue.length; i += 16) {
    let prevValueOfA = a;
    let prevValueOfB = b;
    let prevValueOfC = c;
    let prevValueOfD = d;
    let prevValueOfE = e;
    // Iterating in total 80 times
    for (let t = 0; t <= 79; t++) {
      if (t < 16) {
        w[t] = blockValue[i + t];
      } else {
        w[t] = rotateLeft(w[t - 3] ^ w[t - 8] ^ w[t - 14] ^ w[t - 16], 1);
      }
      conT = add(
        add(rotateLeft(a, 5), process(t, b, c, d)),
        add(add(e, w[t]), K(t))
      );
      e = d;
      d = c;
      c = rotateLeft(b, 30);
      b = a;
      a = conT;
    }
    a = add(a, prevValueOfA);
    b = add(b, prevValueOfB);
    c = add(c, prevValueOfC);
    d = add(d, prevValueOfD);
    e = add(e, prevValueOfE);
  }
  console.log(a, "....", b, "....", c, "....", d, "....", e);
  return (
    intoHexaValue(a) +
    intoHexaValue(b) +
    intoHexaValue(c) +
    intoHexaValue(d) +
    intoHexaValue(e)
  );
}
// Hashed value on click
function hashedValue() {
  finalHashedVal = sha1Hash();
  console.log(finalHashedVal);
  let outputString = document.getElementById("hashVal");

  outputString.value = finalHashedVal;
}
