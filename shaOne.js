//dividing input string into blocks
function divideIntoBlocks(inputString) {
  let i = 0;
  //Up until 55 val result would be zero
  let block = ((inputString.length + 8) >> 6) + 1;
  let size = block * 16;
  let totalBlocks = [size];
  //   Adding padding
  for (i = 0; i < size; i++) {
    totalBlocks[i] = 0;
  }
  for (i = 0; i < inputString.length; i++) {
    totalBlocks[i >> 2] =
      totalBlocks[i >> 2] | (inputString.charCodeAt(i) << (24 - (i % 4) * 8)); //-----brackets
  }
  totalBlocks[i >> 2] = totalBlocks[i >> 2] | (0x80 << (24 - (i % 4) * 8)); //-----brackets
  //   Adding length of string as well
  totalBlocks[size - 1] = inputString.length * 8;
  return totalBlocks;
}
//Adding Values
function add(value1, value2) {
  let lsw = (value1 & 0xffff) + (value2 & 0xffff);
}
function sha1Hash() {}
