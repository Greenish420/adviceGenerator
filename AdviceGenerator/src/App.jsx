import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {


  const Api_Url = "https://api.adviceslip.com/advice";
  const [advice, setAdvice] = useState("");
  const [counter, setCounter] = useState(-1);

  const fetchData = async () => {
    

    
      const result = await axios.get(Api_Url);
      let newAdvice = result.data.slip.advice;
      
    if (newAdvice !== advice) {
      setAdvice(newAdvice);
      setCounter(c => c + 1);
    }
  }


  useEffect(() => {

    fetchData();

  }, [])




  return (

    <div className='bg-[#323a49] w-[500px] min-h-[300px] max-[425px]:w-[80%] rounded-2xl p-9 box-border flex justify-between items-center text-center flex-col gap-2 relative'>
      <h1 className='text-[#52ffa8]'>ADVICE  #{counter}</h1>
      <h1 className='text-[28px] text-[#cee3e9] font-extrabold'>{advice}</h1>
      <img src="/images/pattern-divider-desktop.svg" className='block mt-8 mb-8 max-[500px]:hidden' alt="" />
      <div onClick={fetchData} className='bg-[#52ffa8] rounded-full hover:cursor-pointer w-[64px] h-[64px] flex justify-center items-center absolute -bottom-8'>
        <img src="images/icon-dice.svg" alt="" />
      </div>
    </div>


  )
}

export default App
