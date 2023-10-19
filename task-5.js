function CalculateDistance(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance;
  }

  const x1 = 0;
  const y1 = 0;
  const x2 = 9;
  const y2 = 6;
  const distance = CalculateDistance(x1, y1, x2, y2);
  
  console.log(distance); 