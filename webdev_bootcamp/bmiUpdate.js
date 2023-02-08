function bmiCalculator(weight, height) {
    let bmi = weight / Math.pow(height, 2);
    bmi = Math.round(bmi * 10) / 10;
    
    let interpretation;
    
    if (bmi < 18.5) {
        interpretation =`Your BMI is ${bmi}, so you are underweight.`;
    }

    if (bmi >= 18.5 && bmi < 25) {
        interpretation = `Your BMI is ${bmi}, so you have a normal weight.`;
    }

    if (bmi >= 25) {
        interpretation = `Your BMI is ${bmi}, so you are overweight.`;
    }
    
    return interpretation;
}

console.log(bmiCalculator(67, 1.69));