const isValidArray = require('../is-valid-array');

const BEGIN = '/*';
const END   = '*/';

const removeComments = lines => {
  
  if (!isValidArray(lines)) {
    return lines;
  }

  const newLines  = [];
  let   inComment = false;

  lines.forEach(curLine => {

    let line     = curLine;
    let beginPos = line.indexOf(BEGIN);
    let endPos   = line.indexOf(END);

    if (inComment && endPos >= 0) {
      inComment = false;
      line      = line.substring(endPos + END.length);
      beginPos  = line.indexOf(BEGIN);
      endPos    = line.indexOf(END);
    }
    if (inComment) {
      return;
    }
    if (beginPos < 0) {
      newLines.push(line);
      return;
    }

    // Remove those blocks where they begin and end on the same line
    while (beginPos >= 0 && endPos > beginPos) {
      line     = line.substring(0, beginPos) + line.substring(endPos + END.length);
      beginPos = line.indexOf(BEGIN);
      endPos   = line.indexOf(END);
    }

    if (beginPos < 0) {
      newLines.push(line);
      return;
    }

    // At this point we know beginPos >= 0
    inComment = true;

    if (beginPos === 0) {
      return;
    }

    // At this point beginPos >= 0 and endPos < beginPos
    line = line.substring(0, beginPos);
    newLines.push(line);
  });

  return newLines;
};


module.exports = {
  removeComments,
};
