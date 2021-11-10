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
      <div></div>
    </div>
  );
}

export default Home;
