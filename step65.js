function testGreaterThan(val) {
    if (val > 100) {  // Change this line
      return "Over 100";
    }
    console.log(val > 100)
    if (val > 10) {  // Change this line
      return "Over 10";
    }
    console.log(val > 10)
    return "10 or Under";
  }
  
  testGreaterThan(10);