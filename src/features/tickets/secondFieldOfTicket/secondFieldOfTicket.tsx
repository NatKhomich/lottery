import { useDispatch, useSelector } from 'react-redux'

import { selectSecondFieldNumbers } from '@/app/model/lotterySelectors'
import { setSecondFieldNumber } from '@/app/model/lotterySlice'
import { TicketButton } from '@/features/tickets/ticketButton/ticketButton'

export const SecondFieldOfTicket = () => {
  const secondFieldNumber = useSelector(selectSecondFieldNumbers)
  const dispatch = useDispatch()
  const handleSecondNumberClick = (number: number) => {
    dispatch(setSecondFieldNumber(number === secondFieldNumber ? 0 : number))
  }

  return (
    <>
      {Array.from({ length: 2 }, (_, i) => (
        <TicketButton
          isSelected={secondFieldNumber === i + 1}
          key={i + 1}
          numberButton={i + 1}
          onClick={() => handleSecondNumberClick(i + 1)}
        />
      ))}
    </>
  )
}
