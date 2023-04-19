//bmi=weight/height^2

function BMICalculator(weight,height)
{
 // bmi=weight/(height*height);
  bmi=weight/Math.pow(height,2)
  return Math.round(bmi);
}
BMICalculator(65,1.8)
console.log(Math.round(bmi));
