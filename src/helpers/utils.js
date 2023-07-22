// Display Money in Kenyan Format
export const displayMoney = (n) => {
  const numFormat = new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KSH",
  });

  return numFormat.format(n).split(".", 1);
};

// Calculate Discount Percentage
export const calculateDiscount = (discountedPrice, originalPrice) => {
  const discountedPercent = (discountedPrice / originalPrice) * 100;

  return Math.round(discountedPercent);
};

// Calculate Total Amount
export const calculateTotal = (arr) => {
  const total = arr.reduce((accum, val) => accum + val, 0);

  return total;
};
