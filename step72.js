function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }

     else if (val < 5) {
      return "Smaller than 5";
    } else {
      console.log(val < 5)
    }
  
    return "Between 5 and 10";
  }
  
  testElseIf(7);