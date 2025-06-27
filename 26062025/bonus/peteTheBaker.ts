type Recipe = Record<string, number>

function cakes(recipe: Recipe, available: Recipe): number {
    const recipeKeys = Object.keys(recipe);

    const possibleCakesForEachKey = recipeKeys.map((key) => {
        if (available[key] === undefined) return 0;
        return Math.floor(available[key] / recipe[key]);
    });
    
    return Math.min(...possibleCakesForEachKey);
}

console.log(cakes(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
  ))
  // 2
  
  console.log(cakes(
    { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
    { sugar: 500, flour: 2000, milk: 2000 }
  ))
  // 0
  
  console.log(cakes(
    { flour: 100, sugar: 50 },
    { flour: 1000, sugar: 300 }
  ))
  // 6
  
  console.log(cakes(
    { eggs: 2 },
    { eggs: 1 }
  ))
  // 0
  
  console.log(cakes(
    { flour: 200, sugar: 100, cocoa: 50 },
    { flour: 1200, sugar: 500, cocoa: 300 }
  ))
  // 5