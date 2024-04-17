import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/app/store'
import {
  calculateResult,
  resetLottery,
  setFirstFieldNumbers,
  setSecondFieldNumber,
} from '@/features/lotterySlice'

export function App() {
  const dispatch = useDispatch()
  const [selectedFirstNumbers, setSelectedFirstNumbers] = useState<number[]>([])
  const [selectedSecondNumber, setSelectedSecondNumber] = useState<null | number>(null)
  const result = useSelector((state: RootState) => state.lottery.result)

  const handleFirstNumberClick = (number: number) => {
    if (selectedFirstNumbers.includes(number)) {
      setSelectedFirstNumbers(selectedFirstNumbers.filter(num => num !== number))
    } else {
      setSelectedFirstNumbers([...selectedFirstNumbers, number])
    }
  }

  const handleSecondNumberClick = (number: number) => {
    setSelectedSecondNumber(number === selectedSecondNumber ? null : number)
  }

  const handleSubmit = () => {
    dispatch(setFirstFieldNumbers(selectedFirstNumbers))
    console.log(selectedFirstNumbers)
    dispatch(setSecondFieldNumber(selectedSecondNumber!)) // Убедимся, что selectedSecondNumber не null
    console.log(selectedSecondNumber)
    dispatch(calculateResult())
  }

  const handleReset = () => {
    setSelectedFirstNumbers([])
    setSelectedSecondNumber(null)
    dispatch(resetLottery())
  }

  // Генерируем кнопки для первого поля
  const firstFieldButtons = []

  for (let i = 1; i <= 19; i++) {
    const isSelected = selectedFirstNumbers.includes(i)

    const buttonStyle = {
      backgroundColor: isSelected ? 'lightblue' : 'white',
    }

    firstFieldButtons.push(
      <button
        key={i}
        onClick={() => {
          handleFirstNumberClick(i)
          console.log(i)
        }}
        style={buttonStyle}
      >
        {i}
      </button>
    )
  }

  // Генерируем кнопки для второго поля
  const secondFieldButtons = []

  for (let i = 1; i <= 2; i++) {
    const isSelected = selectedSecondNumber === i
    const buttonStyle = {
      backgroundColor: isSelected ? 'lightblue' : 'white',
    }

    secondFieldButtons.push(
      <button key={i} onClick={() => handleSecondNumberClick(i)} style={buttonStyle}>
        {i}
      </button>
    )
  }

  return (
    <div>
      <div>
        <p>Первое поле:</p>
        {firstFieldButtons}
      </div>
      <div>
        <p>Второе поле:</p>
        {secondFieldButtons}
      </div>
      <button onClick={handleSubmit}>Проверить результат</button>
      <button onClick={handleReset}>Сбросить</button>
      <br />
      <div>{result}</div>
    </div>
  )
}
