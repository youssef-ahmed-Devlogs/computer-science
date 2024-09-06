function trapezoidArea(base1, base2, height) {
    var area = (1 / 2) * (base1 + base2) * height;
    return area;
  }
  
  console.log(trapezoidArea(10, 20, 30)); // 450
  console.log(trapezoidArea(50, 60, 70)); // 3850