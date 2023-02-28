function randomRange(myMin, myMax) {
    // Only change code below this line
    console.log(myMin, myMax)
    let rand = Math.floor(Math.random() * (myMax - myMin + 1) + myMin )
    return rand;
    // Only change code above this line
  }