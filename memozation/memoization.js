

function MultiplyByTwo(n) {
    if (MultiplyByTwo.cache === undefined) {
      MultiplyByTwo.cache = {};
    }
  
    if (MultiplyByTwo.cache.hasOwnProperty(n)) {
      console.log(MultiplyByTwo.cache[n]+"ccccc"); // If result for n is already calculated, return it from cache
    } else {
      const result = n * 2; // Expensive calculation
      MultiplyByTwo.cache[n] = result; // Store the result in cache
      console.log(result);
    }
  }
MultiplyByTwo(3);
MultiplyByTwo(5);
MultiplyByTwo(3);
MultiplyByTwo(4);