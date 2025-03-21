function getElementWidth(content, padding, border) {
  let contentWidth = parseFloat(content);
  let paddingWidth = parseFloat(padding) * 2;
  let borderWidth = parseFloat(border) * 2;

  return contentWidth + paddingWidth + borderWidth;
}

console.log(getElementWidth('200px', '10px', '2px')); // 224
console.log(getElementWidth('150px', '15px', '3px')); // 186
console.log(getElementWidth('100px', '5px', '1px')); // 112
