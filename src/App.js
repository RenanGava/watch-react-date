import { useEffect, useState } from 'react';
import './App.css';
// formas de utilizar o useEffect e o useState 
const date = new Date()

function App() {
  const [dateTime, setDateTime] = useState({
    hora: date.getHours(),
    minutos: date.getMinutes(),
    segundos: date.getSeconds()
  })

  useEffect(()=>{
    const timer = setInterval(()=>{
      const date = new Date()
     setDateTime({
      hora: date.getHours(),
      minutos: date.getMinutes(),
      segundos: date.getSeconds(),
     })
    }, 1000)
    return ()=> clearInterval(timer)
    // sempre que utilizar-mos o setInterval, devemos limpar ele para não dar
    // execesso de listeners, e deixar nossa aplicação lenta e pesada
  }, [])

  return (
    <div className="App">
      <h2>{dateTime.hora}:{dateTime.minutos}:{dateTime.segundos}</h2>
    </div>
  );
}

export default App;