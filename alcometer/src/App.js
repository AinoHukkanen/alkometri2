import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {

  const [weight, setWeight] = useState(0)
  const [bottles, setBottles] = useState(0)
  const [time, setTime] = useState(0)
  const [tulos, setTulos] = useState(0)
  const [gender, setGender] = useState('male')


  function calculate(e) {
    e.preventDefault();
   
    const litres = bottles * 0.33
    const grams = litres * 8 * 4.5
    const burning = weight / 10
    const gramsLeft = grams - (burning / time)

    let tulos = 0;
    if (gender === 'male') {
     tulos = gramsLeft / (weight * 0.7);
    } else {
     tulos = gramsLeft / (weight * 0.6);
 }

    setTulos(tulos);
  }

  return (
  <form onSubmit={calculate}> 
    <h3>Calculating alcohol blood level</h3>

    <div>
      <label>Weight:</label>
      <input type="number" value={weight} onChange={e => setWeight(e.target.value)}/>
      <br></br>
      </div>

      <div>
      <label>Bottles:</label>
      <select name="bottles" value={bottles} onChange={e => setBottles(e.target.value)}>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      
      </div>

      <div>
      <label>Time:</label>
      <input type="number" value={time} onChange={e => setTime(e.target.value)}></input><br></br>
      </div>

      <div>
      <label>Gender:</label><br></br>
      <input type="radio" value="male" name="gender" defaultChecked onChange={e => setGender(e.target.value)}></input> 
      <label>Male</label>
      <input type="radio" value="female" name="gender" onChange={e => setGender(e.target.value)}></input>
      <label>Female</label>
      </div>

      <div>
      <output>{tulos.toFixed(1)}</output><br></br>
      <button>Calculate</button><br></br>
      
    </div>
  </form>
  );
}

export default App;
