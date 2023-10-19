function CalculateDiscount(price, DiscountPercentage) {
    var discount = (price * DiscountPercentage) / 100;
    var discountedPrice = price - discount;
    return discountedPrice;
  }
  
  var price = 100;
  var discountPercentage = 20;
  var discountedPrice = CalculateDiscount(price, discountPercentage);
  console.log(discountedPrice);