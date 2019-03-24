module.exports = function getZerosCount(number, base) {
  if (number< 0 || base <0) {
    return false;
  }
  else{

    for(var x = 1; x<= Math.pow(10,7);++x)
    {
      var res1 = 0;
      res1 = x/5 + (x - (x % 25) )/25; 
    } 
    
    for(var i = 2; i<= 256;++i)
    {
      var res2 = 0;
      res2 = i/5 + (i - (i % 25) )/25; 
    } 
    
    return res1, res2;
  }
}