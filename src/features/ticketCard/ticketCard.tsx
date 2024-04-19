import { useDispatch, useSelector } from 'react-redux'

import { selectFirstFieldNumbers, selectSecondFieldNumbers } from '@/app/model/lotterySelectors'
import {
  calculateRandom,
  calculateResult,
  resetLottery,
  setFirstFieldNumbers,
  setSecondFieldNumber,
} from '@/app/model/lotterySlice'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { FirstFieldOfTicket } from '@/features/ticketCard/firstFieldOfTicket'
import { SecondFieldOfTicket } from '@/features/ticketCard/secondFieldOfTicket'

import s from './ticketCard.module.scss'

import svg from '../../assets/magic-wand.svg'

export const TicketCard = () => {
  const firstFieldNumbers = useSelector(selectFirstFieldNumbers)
  const secondFieldNumber = useSelector(selectSecondFieldNumbers)

  const dispatch = useDispatch()

  const handleCalculateRandom = () => {
    dispatch(calculateRandom())
  }

  const handleSubmit = () => {
    dispatch(calculateResult())
    dispatch(setFirstFieldNumbers([]))
    dispatch(setSecondFieldNumber(0))
  }

  const handleReset = () => {
    dispatch(resetLottery())
  }

  return (
    <Card className={s.card}>
      <div className={s.header}>
        <Typography variant={'title'}>Билет 1</Typography>
        <button onClick={handleCalculateRandom}>
          <img alt={'magic'} src={svg} />
        </button>
      </div>

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
        <Button onClick={handleReset} variant={'secondary'}>
          Очистить
        </Button>
      </div>
    </Card>
  )
}
