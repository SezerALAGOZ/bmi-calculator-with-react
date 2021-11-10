import React from "react";
import DietList from "../dietList.json";
import { useState } from "react";

function Home() {
  const [username, setUsername] = useState();
  const [userWeight, setUserWeight] = useState();
  const [userHeight, setUserHeight] = useState();
  const [bmi, setBMI] = useState();
  const [form, setForm] = useState([]);

  const onChangeUserName = (event) => {
    setUsername(event.target.value);
  };
  const onChangeUserWeight = (event) => {
    setUserWeight(event.target.value);
  };
  const onChangeUserHeight = (event) => {
    setUserHeight(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    let calculatedBmi = +userWeight / (+userHeight / 100) ** 2;
    calculatedBmi = calculatedBmi.toFixed(2);
    setBMI(calculatedBmi);
    const newFormElement = {
      username: username,
      weight: userWeight,
      height: userHeight,
      bmi: calculatedBmi,
    };
    setForm([...form, newFormElement]);
  };

  localStorage.setItem("formData", JSON.stringify(form));

  return (
    <div className="App">
      <div id="formArea" className="row">
        <form onSubmit={() => onSubmit()}>
          <div className="inputArea">
            <h3>LEARN YOUR BMI</h3>
            <label>Fullname</label>
            <input
              id="username"
              name="username"
              className="username"
              placeholder="Your name..."
              autoFocus
              value={username}
              onChange={onChangeUserName}
            />
          </div>
          <div className="inputArea">
            <label>Weight</label>
            <input
              type="number"
              id="weight"
              name="userweight"
              className="weight"
              placeholder="ex: 70kg"
              autoFocus
              value={userWeight}
              onChange={onChangeUserWeight}
            />
          </div>
          <div className="inputArea">
            <label>Height</label>
            <input
              type="number"
              id="height"
              name="userheight"
              className="height"
              placeholder="ex: 170cm"
              autoFocus
              value={userHeight}
              onChange={onChangeUserHeight}
            />
          </div>
          <div className="inputArea">
            <button onClick={onSubmit}>Calculate</button>
          </div>
        </form>
      </div>

      <div className="row">
        {bmi < 18.5 && (
          <div className="dietlist dietListArea">
            <h3>Diyet Listesi - {DietList.first.id}</h3>
            <p>
              <span>Morning:</span> {DietList.first.morning}
            </p>
            <p>
              <span>Afternoon:</span> {DietList.first.noon}
            </p>
            <p>
              <span>Evening:</span> {DietList.first.evening}
            </p>
          </div>
        )}
        {bmi >= 18.5 && bmi < 25 && (
          <div className="dietlist dietListArea">
            <h3>Şu andaki beslenmene devam et...</h3>
          </div>
        )}
        {bmi >= 25 && bmi < 30 && (
          <div className="dietlist dietListArea">
            <h3>Diyet Listesi - {DietList.second.id}</h3>
            <p>
              <span>Morning:</span> {DietList.second.morning}
            </p>
            <p>
              <span>Afternoon:</span> {DietList.second.noon}
            </p>
            <p>
              <span>Evening:</span> {DietList.second.evening}
            </p>
          </div>
        )}
        {bmi >= 30 && (
          <div className="dietlist dietListArea">
            <h3>Diyet Listesi - {DietList.third.id}</h3>
            <p>
              <span>Morning:</span> {DietList.third.morning}
            </p>
            <p>
              <span>Afternoon:</span> {DietList.third.noon}
            </p>
            <p>
              <span>Evening:</span> {DietList.third.evening}
            </p>
          </div>
        )}
      </div>

      {(bmi >= 18.5 && bmi < 25) && (
        <div className="row bmi bmi-healthy">
          <p>
            <span>Your BMI: </span>
            {bmi}
          </p>
        </div>
      )}
      {(bmi < 18.5 || bmi >= 25) && (
        <div className="row bmi bmi-unhealthy">
          <p>
            <span>Your BMI: </span>
            {bmi}
          </p>
        </div>
      )}
    </div>
  );
}

export default Home;
