import React, { useState } from 'react'
import questions from './questions.json'

const Questions = ({setisOver,setscore}) => {

  const [currentIndex, setcurrnetIndex] = useState(0)
 

  const handleOptionClick = (selectedOption) => {
    if (selectedOption === questions[currentIndex].answer) {
      setscore(prev => prev + 1)

    }
    if(currentIndex < questions.length-1 ){
      setcurrnetIndex(perv=>perv+1)
    }
    else{
      setisOver(true)
    }

  }
  console.log(questions[currentIndex].question);
  return (
    <div>
      <h2 className='mt-8 mb-4'>{questions[currentIndex].question}</h2>

      <div className='flex flex-col gap-3'>
        {
          questions[currentIndex].options.map((option) => {
            return <button key={option}

              onClick={() => { handleOptionClick(option) }}

              className='flex flex-col gap-1rem' >
              {option}
            </button>
          })
        }  
      </div>

    </div>
  )
}

export default Questions
