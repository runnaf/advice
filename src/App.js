import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const API = 'http://www.boredapi.com/api/activity/';

  const [advice, setAdvice] = useState("don't know what to do")

  async function getData () {
    const response = await fetch(API);
    const data = await response.json();
    const newAdvice = data.activity
    setAdvice(newAdvice)
  }

  useEffect(()=>{
    getData()
  }, [setAdvice])

  return (
    <div className='advice-container'>
      <h2>{advice}</h2>
      <button type='button' onClick={getData}>Click for new advice</button>
    </div>
  );
}

export default App;
