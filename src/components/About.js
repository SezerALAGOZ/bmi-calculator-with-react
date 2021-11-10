import React from "react";

function About() {
  return (
    <div>
      <div>
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
      <div>
          <div>
              <div>10-18.5</div>
              <div>Thin</div>
              <div>Unhealthy</div>
          </div>
          <div>
              <div>18.5 - 25</div>
              <div>Healty</div>
              <div>Healthy</div>
          </div>
          <div>
              <div>25 - 30</div>
              <div>Overweight</div>
              <div>Unhealthy</div>
          </div>
          <div>
              <div>30-40</div>
              <div>Fat</div>
              <div>Unhealty</div>
          </div>
          <div>
              <div>40-60</div>
              <div>Obesity</div>
              <div>Unhealthy</div>
          </div>
      </div>
    </div>
  );
}

export default About;
