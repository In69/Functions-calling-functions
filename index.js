const adult = function(age){
    if (age >= 18) {
return true;  
}
else{
    return false;
}
}

const greeting = function(age){
    if (adult(age)){
        return "Hello there";
    }
    else{
        return "Hey kiddo";
    }
}

console.log ( greeting(25));
console.log (greeting(15));

const calculateVAT = function(basePrice, percentageVAT) {
    return basePrice * (percentageVAT/100); 
  };
  
  const calculatePriceWithVAT = function(basePrice, percentageVAT) {
    const VAT = calculateVAT(basePrice, percentageVAT); 
    return basePrice + VAT;
  }
  
  console.log(calculatePriceWithVAT(1000, 21));
  console.log(calculatePriceWithVAT(2, 9));

const calculateBasePrice = function(priceWithVAT, percVAT) {
    const basePrice1 = priceWithVAT/((100 + percVAT) / 100);
    return basePrice1;
  }
  
  const calculateBasePriceAndVAT = function(priceWithVAT, percVAT) {
    const basePrice1 = calculateBasePrice(priceWithVAT, percVAT);
    const amountVAT = priceWithVAT - basePrice1;
    return [basePrice1, amountVAT];
  };
  
  console.log(calculateBasePriceAndVAT(1210, 21));
  console.log(calculateBasePriceAndVAT(2.18, 9));
  console.log(calculateBasePriceAndVAT(999, 21));
  