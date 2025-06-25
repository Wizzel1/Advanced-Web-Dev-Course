function getStringOrder(input) {
    const validNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
    const split = input.split(" ")
    let string = ""
    for (const number of validNumbers) {
      for (const word of split) {
        if(!word.includes(number)) continue;
        string += word + " "
      }
    }
    return string.trim();
  }
  
  console.log(getStringOrder("4of Fo1r pe6ople g3ood th5e the2"))
  