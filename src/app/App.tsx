import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { selectLotteryResult } from '@/app/model/lotterySelectors'
import {
  calculateResult,
  resetLottery,
  setFirstFieldNumbers,
  setSecondFieldNumber,
} from '@/app/model/lotterySlice'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { FirstFieldOfTicket } from '@/features/tickets/firstFieldOfTicket'
import { SecondFieldOfTicket } from '@/features/tickets/secondFieldOfTicket'

import s from './app.module.scss'

export function App() {
  const [selectedFirstNumbers, setSelectedFirstNumbers] = useState<number[]>([])
  const [selectedSecondNumber, setSelectedSecondNumber] = useState<null | number>(null)
  const result = useSelector(selectLotteryResult)
  const dispatch = useDispatch()

  const handleSubmit = () => {
    dispatch(setFirstFieldNumbers(selectedFirstNumbers))
    dispatch(setSecondFieldNumber(selectedSecondNumber!))
    dispatch(calculateResult())
    setSelectedFirstNumbers([])
    setSelectedSecondNumber(null)
  }

  const handleReset = () => {
    setSelectedFirstNumbers([])
    setSelectedSecondNumber(null)
    dispatch(resetLottery())
  }

  return (
    <div className={s.container}>
      <Card className={s.card}>
        <Typography variant={'title'}>Билет 1</Typography>
        <div className={s.titles}>
          <Typography variant={'subtitle1'}>Поле 1</Typography>
          <Typography variant={'subtitle2'}>Отметьте 8 чисел</Typography>
        </div>

        <FirstFieldOfTicket
          selectedFirstNumbers={selectedFirstNumbers}
          setSelectedFirstNumbers={setSelectedFirstNumbers}
        />
        <div className={s.titles}>
          <Typography variant={'subtitle1'}>Поле 2</Typography>
          <Typography variant={'subtitle2'}>Отметьте 1 число</Typography>
        </div>
        <SecondFieldOfTicket
          selectedSecondNumber={selectedSecondNumber}
          setSelectedSecondNumber={setSelectedSecondNumber}
        />
        <div className={s.buttons}>
          <Button
            disabled={selectedFirstNumbers.length < 8 || !selectedSecondNumber}
            onClick={handleSubmit}
            variant={'secondary'}
          >
            Показать результат
          </Button>
          <Button
            disabled={selectedFirstNumbers.length === 0 && !selectedSecondNumber}
            onClick={handleReset}
            variant={'secondary'}
          >
            Очистить
          </Button>
        </div>
      </Card>

      <Card>
        <Typography variant={'title'}>Билет 1</Typography>
        <Typography variant={'subtitle1'}>{result}</Typography>
      </Card>
    </div>
  )
}
