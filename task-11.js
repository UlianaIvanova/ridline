function calculateEmployeeBonus(salary, performanceRating) {
    let bonusPercentage;
  
    if (performanceRating > 8) {
      bonusPercentage = 0.2; 
    } else {
      bonusPercentage = 0.1;
    }
  
    const bonus = salary * bonusPercentage;
    return bonus;
  }
  const employeeSalary = 5000;
const employeePerformanceRating = 9;
const employeeBonus = calculateEmployeeBonus(employeeSalary, employeePerformanceRating);
console.log(employeeBonus);