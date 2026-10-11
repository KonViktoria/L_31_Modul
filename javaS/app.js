import { add, subtract, multiply, divide } from "./math.js";
import {getCircleArea} from "./geometry.js";
import {getRectangleArea} from "./geometry.js";
import {getCircleLength}  from "./geometry.js"


console.log(add(15, 7))
console.log(subtract(20,8))
console.log(multiply(6, 9))
console.log(divide(100, 4))
console.log(divide(10, 0))


console.log( "Circle area (r=5):", getCircleArea(5))
console.log( "Rectangle area (8x12): ", getRectangleArea(8,12 ))
console.log("Circle length (r=10):",getCircleLength(10))
