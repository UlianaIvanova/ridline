function calculateAverageGrade(grades){
        const gradeArray = grades.split(",").map(Number);
        const sum = gradeArray.reduce((acc, curr) => acc + curr, 0);
        const average = sum / gradeArray.length; 
        return average;
      }
      const grades = "8,7,9,10,6";
const averageGrade = calculateAverageGrade(grades);
console.log(averageGrade);
