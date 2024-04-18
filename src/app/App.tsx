import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/app/store'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import {
  calculateResult,
  resetLottery,
  setFirstFieldNumbers,
  setSecondFieldNumber,
} from '@/features/lotterySlice'

import s from './app.module.scss'

export function App() {
  const dispatch = useDispatch()
  const [selectedFirstNumbers, setSelectedFirstNumbers] = useState<number[]>([])
  const [selectedSecondNumber, setSelectedSecondNumber] = useState<null | number>(null)
  const result = useSelector((state: RootState) => state.lottery.result)

  const handleFirstNumberClick = (number: number) => () => {
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
      backgroundColor: isSelected ? '#ffd205' : '',
    }

    firstFieldButtons.push(
      <Button key={i} onClick={handleFirstNumberClick(i)} style={buttonStyle}>
        {i}
      </Button>
    )
  }

  // Генерируем кнопки для второго поля
  const secondFieldButtons = []

  for (let i = 1; i <= 2; i++) {
    const isSelected = selectedSecondNumber === i
    const buttonStyle = {
      backgroundColor: isSelected ? '#ffd205' : '',
    }

    secondFieldButtons.push(
      <Button key={i} onClick={() => handleSecondNumberClick(i)} style={buttonStyle}>
        {i}
      </Button>
    )
  }

  return (
    <div className={s.container}>
      <Card className={s.card}>
        <Typography variant={'title'}>Билет 1</Typography>
        <div className={s.titles}>
          <Typography variant={'subtitle1'}>Поле 1</Typography>
          <Typography variant={'subtitle2'}>Отметьте 8 чисел</Typography>
        </div>

        {firstFieldButtons}
        <div className={s.titles}>
          <Typography variant={'subtitle1'}>Поле 2</Typography>
          <Typography variant={'subtitle2'}>Отметьте 1 число</Typography>
        </div>
        {secondFieldButtons}
        <div className={s.buttons}>
          <Button
            disabled={selectedFirstNumbers.length < 8 || selectedSecondNumber === null}
            onClick={handleSubmit}
            variant={'secondary'}
          >
            Показать результат
          </Button>
          <Button onClick={handleReset} variant={'secondary'}>
            Очистить
          </Button>
        </div>
      </Card>

      <Card>
        <Typography variant={'title'}>Билет 1</Typography>
        <Typography variant={'subtitle1'}>{result}</Typography>
      </Card>
      {/*<div>*/}
      {/*  <p>Первое поле:</p>*/}
      {/*  {firstFieldButtons}*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  <p>Второе поле:</p>*/}
      {/*  {secondFieldButtons}*/}
      {/*</div>*/}
      {/*<button onClick={handleSubmit}>Проверить результат</button>*/}
      {/*<button onClick={handleReset}>Сбросить</button>*/}
      {/*<br />*/}
      {/*<div>{result}</div>*/}
    </div>
  )
}
