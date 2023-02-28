// Setup
function phoneticLookup(val) {
    let result = "";
    console.log(val)
    // Only change code below this line
    var lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank"
    }
    result = lookup[val]
    function lookup(val) {
      
    }
    // Only change code above this line
    return result;
  }
  
  phoneticLookup("charlie");