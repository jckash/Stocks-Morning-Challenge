function decoder(code) {
    let decodedString = "";
    let skip = 0;
    let i = 0;
  
    while (i < code.length) {
      if (!isNaN(parseInt(code[i]))) {
        skip = parseInt(code[i]);
      } else {
        decodedString += code[i];
        i += skip;
        skip = 0;
      }
      i++;
    }
  
    return decodedString;
  }