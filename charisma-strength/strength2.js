function strength(num) {
  // check the input (should be a natural number)
  if (num <= 0 || !Number.isInteger(num)) {
    return "Please enter a natural number.";
  }

  // if the input is a single digit
  if (num < 10) {
    return 0;
  }

  // multiply the digits and call the function
  let product = 1;
  while (num > 0) {
    product *= num % 10;
    num = Math.floor(num / 10);
  }

  if (product < 10) {
    return 1;
  }

  return 1 + strength(product);
}
