import React from "react";
import DietList from "../dietList.json";
import { useState } from "react";

function Home() {
  const [username, setUsername] = useState("");
  const [userWeight, setUserWeight] = useState(0);
  const [userHeight, setUserHeight] = useState(0);
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
        
      <div>
        <form onSubmit={() => onSubmit()}>
          <div>
            <input
              id="username"
              name="username"
              className="username"
              placeholder="Your name..."
              autoFocus
              value={form.username}
              onChange={onChangeUserName}
            />
          </div>
          <p>{form.username}</p>
          <div>
            <input
              id="weight"
              name="userweight"
              className="weight"
              placeholder="Your weight."
              autoFocus
              value={form.userWeight}
              onChange={onChangeUserWeight}
            />
          </div>
          <p>{form.userWeight}</p>
          <div>
            <input
              id="height"
              name="userheight"
              className="height"
              placeholder="Your height..."
              autoFocus
              value={form.userHeight}
              onChange={onChangeUserHeight}
            />
            <p>{form.userHeight}</p>
          </div>
          <button onClick={onSubmit}>Ölç</button>
        </form>
      </div>

      <div>{bmi}</div>

      <div>
        {bmi < 18.5 && (
          <div>
            <h3>Diyet Listesi - {DietList.first.id}</h3>
            <p>{DietList.first.morning}</p>
            <p>{DietList.first.noon}</p>
            <p>{DietList.first.evening}</p>
          </div>
        )}
        {(bmi >= 18.5 && bmi < 25) && (
          <div>
            <h3>Şu andaki beslenmene devam et...</h3>
          </div>
        )}
        {(bmi >= 25 && bmi < 30) && (
          <div>
            <h3>Diyet Listesi - {DietList.second.id}</h3>
            <p>{DietList.second.morning}</p>
            <p>{DietList.second.noon}</p>
            <p>{DietList.second.evening}</p>
          </div>
        )}
        {bmi >= 30 && (
          <div>
            <h3>Diyet Listesi - {DietList.third.id}</h3>
            <p>{DietList.third.morning}</p>
            <p>{DietList.third.noon}</p>
            <p>{DietList.third.evening}</p>
          </div>
        )}
      </div>

    </div>
  );
}

export default Home;
