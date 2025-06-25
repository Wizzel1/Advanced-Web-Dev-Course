function getObscuredString(input){
    if (!input) return '';
    if (input.length <= 4) return "****";
    const asterisks = "*".repeat(input.length - 4);
    const visibleText = input.slice(input.length - 4, input.length) 
    return asterisks + visibleText;
  }
  
  
  console.log(getObscuredString("Hello world"))