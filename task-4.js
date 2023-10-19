function CalculateRectangleProperties(width, height) {
    const perimeter = 2 * (width + height);
    const ploshad = width * height;
    
    const rectangleProperties = {
      perimeter: perimeter,
      ploshad: ploshad
    };
    
    return rectangleProperties;
  }
  
  const width = 10;
  const height = 5;
  const rectangle = CalculateRectangleProperties(width, height);
  
  console.log(rectangle);
  console.log(rectangle.perimeter); 
  console.log(rectangle.ploshad); 