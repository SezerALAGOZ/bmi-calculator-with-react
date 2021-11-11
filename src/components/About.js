import React from "react";
import BMIRange from '../images/2e1d1f7e4724f8d2cdb0951c2c610cfa.png'

function About() {
  return (
    <div id="bmi-about-container">
      <div id="bmi-about-content">
        <h2>What is BMI?</h2>
        <p>
          Body mass index (BMI) is a person’s weight in kilograms divided by the
          square of height in meters. BMI is an inexpensive and easy screening
          method for weight category—underweight, healthy weight, overweight,
          and obesity.
        </p>

        <p>
          BMI does not measure body fat directly, but BMI is moderately
          correlated with more direct measures of body fat 1,2,3. Furthermore,
          BMI appears to be as strongly correlated with various metabolic and
          disease outcome as are these more direct measures of body fatness.
        </p>
      </div>
      <div id="bmi-image">
        <img src={BMIRange} alt="an-image-showing-bmi-intervals" />
      </div>
    </div>
  );
}

export default About;
