function calculateBMI() {
 var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;
  var result = document.getElementById("result");



 var bmi = (weight / (height * height)).toFixed(2);
  

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  result.innerHTML = `Your BMI is ${bmi}(${category})`;
}