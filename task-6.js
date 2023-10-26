function calculateTime(distance, speed) {
    if (typeof distance !== "number" || typeof speed !== "number" || distance < 0 || speed < 0) {
      return "Invalid input";
    }
  
    const timeInHours = distance / speed;
    const hours = Math.floor(timeInHours);
    const minutes = Math.round((timeInHours - hours) * 60);
  
    return `${hours}ч. ${minutes}м.`;
  }
  
  console.log(calculateTime(100, 50));