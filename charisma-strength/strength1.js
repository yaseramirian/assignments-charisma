function strength(num) {
  // Check the input (should be a natural number)
  if (num <= 0 || !Number.isInteger(num)) {
    return "Please enter a natural number.";
  }

  let count = 0;
  while (num >= 10) {
    let product = 1;
    while (num > 0) {
      product *= num % 10;
      num = Math.floor(num / 10);
    }
    num = product;
    count++;
  }
  // if the input is a single digit
  return count;
}
