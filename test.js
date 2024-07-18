function stringFormatter(str) {
  let numberPart = str.replace(/^([a-zA-Z]*)(\d* |\d*\.?\d+)$/g, "$2");
  const dotIndex = numberPart.indexOf('.');

  if (dotIndex !== -1) {
    // 如果有小数点，截取到小数点后两位
    return numberPart.slice(0, dotIndex + 3);
  } else {
    // 如果没有小数点，添加".00"
    return numberPart + '.00';
  }
}

console.log(stringFormatter("abcd123.456"))
console.log(stringFormatter("abcd123"))
