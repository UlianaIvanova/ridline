function generateRandomEquation() {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    const c = Math.floor(Math.random() * 10) + 1;
  
    const equation = `${a}x + ${b} = ${c}`;
  
    return equation;
  }
  const randomEquation = generateRandomEquation();
console.log(randomEquation); 