 const PI = Math.PI;
 console.log(PI)

 export  function getCircleArea(radius){
   return Number((PI * radius*radius).toFixed(5) )
 }
 export function getRectangleArea(width, height) {
     return   width * height
 }

 export  function  getCircleLength(radius)  {
     return Number((2 * PI * radius ).toFixed(5))
 }
