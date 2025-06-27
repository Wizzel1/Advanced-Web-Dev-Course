const menu = [
    "Burger",
    "Fries",
    "Chicken",
    "Pizza",
    "Sandwich",
    "Onionrings",
    "Milkshake",
    "Coke",
]
function formatOrder(order: string){
    let orderCopy = order;
    const result: Array<string> = [];

    for (const item of menu) {
       const occurrences = orderCopy.split(item.toLowerCase()).length - 1;
       for (let i = 0; i < occurrences; i++) {
        result.push(item);
       }
       orderCopy = orderCopy.replace(item.toLowerCase(), "");
    }
    console.log(result)
}


formatOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza")
// "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

formatOrder("pizzapizzapizza")
// "Pizza Pizza Pizza"

formatOrder("burgerfriesburgerfriesburgerfries")
// "Burger Fries Burger Fries Burger Fries"

formatOrder("onionringsmilkshakeonionringsmilkshake")
// "Onionrings Onionrings Milkshake Milkshake"

formatOrder("cokecokecoke")
// "Coke Coke Coke"