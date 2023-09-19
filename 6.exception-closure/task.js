function parseCount (value) {
 const parsedFunc = Number.parseFloat(value);
 if (isNaN(parsedFunc)){
  throw new Error ("Невалидное значение");
 }
 return parsedFunc;
}

function validateCount (value){
  try {
    return parseCount(value);
  } catch (error) {
    return error;
  }
}

const error = validateCount()

class Triangle{
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    
    let sum = a + b;

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error ("Треугольник с такими сторонами не существует");
    }
  } 
 
  get perimeter() {
      return Number(this.a + this.b + this.c);
  }

  get area () {
     const s = (this.a + this.b + this.c) / 2;
     const triangleArea = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
     return Number(triangleArea.toFixed(3));
  }
  
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    return {
      get area() {
        return "Ошибка! Треугольник не существует";
      },
      get perimeter(){
        return "Ошибка! Треугольник не существует";
      }

    }
    
  }
}
