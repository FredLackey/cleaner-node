const fromResult = (item) => {
  let curItem = item;
  while (curItem && curItem.result) {
    curItem = curItem.result;
  }
  return curItem;
};

module.exports = fromResult;
