// Remove Duplicate from Adjasent String 

const removeDuplicates = str => {
    let lastChar = str[0];
    let finalT = str[0];
    for (const char of str.slice(1)) {
      if (lastChar !== char) finalT += char;
      lastChar = char;
    }
    return finalT;
  };
  console.log(removeDuplicates('jjjavvvaaassscript'));