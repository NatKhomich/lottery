import { useDispatch, useSelector } from 'react-redux'

import { selectFirstFieldNumbers, selectSecondFieldNumbers } from '@/app/model/lotterySelectors'
import {
  calculateResult,
  resetLottery,
  setFirstFieldNumbers,
  setSecondFieldNumber,
} from '@/app/model/lotterySlice'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { ResultCard } from '@/features/resultCard'
import { FirstFieldOfTicket } from '@/features/tickets/firstFieldOfTicket'
import { SecondFieldOfTicket } from '@/features/tickets/secondFieldOfTicket'

import s from './app.module.scss'

export function App() {
  const firstFieldNumbers = useSelector(selectFirstFieldNumbers)
  const secondFieldNumber = useSelector(selectSecondFieldNumbers)

  const dispatch = useDispatch()

  const handleSubmit = () => {
    dispatch(calculateResult())
    dispatch(setFirstFieldNumbers([]))
    dispatch(setSecondFieldNumber(0))
  }

  const handleReset = () => {
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

        <FirstFieldOfTicket />
        <div className={s.titles}>
          <Typography variant={'subtitle1'}>Поле 2</Typography>
          <Typography variant={'subtitle2'}>Отметьте 1 число</Typography>
        </div>
        <SecondFieldOfTicket />
        <div className={s.buttons}>
          <Button
            disabled={firstFieldNumbers.length < 8 || !secondFieldNumber}
            onClick={handleSubmit}
            variant={'secondary'}
          >
            Показать результат
          </Button>
          <Button
            disabled={firstFieldNumbers.length === 0 && !secondFieldNumber}
            onClick={handleReset}
            variant={'secondary'}
          >
            Очистить
          </Button>
        </div>
      </Card>

      {/*<Card>*/}
      {/*  <Typography variant={'title'}>Билет 1</Typography>*/}
      {/*  <Typography variant={'subtitle1'}>{result}</Typography>*/}
      {/*</Card>*/}
      <ResultCard />
    </div>
  )
}
