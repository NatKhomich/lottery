import { useDispatch, useSelector } from 'react-redux'

import { selectFirstFieldNumbers } from '@/app/model/lotterySelectors'
import { setFirstFieldNumbers } from '@/app/model/lotterySlice'
import { TicketButton } from '@/features/ticketCard/ticketButton'

export const FirstFieldOfTicket = () => {
  const firstFieldNumbers = useSelector(selectFirstFieldNumbers)
  const dispatch = useDispatch()
  const handleFirstNumberClick = (number: number) => {
    if (firstFieldNumbers.includes(number)) {
      dispatch(setFirstFieldNumbers(firstFieldNumbers.filter(num => num !== number)))
    } else {
      dispatch(setFirstFieldNumbers([...firstFieldNumbers, number]))
    }
  }

  return (
    <>
      {Array.from({ length: 19 }, (_, i) => (
        <TicketButton
          isDisabled={firstFieldNumbers.length >= 8 && !firstFieldNumbers.includes(i + 1)}
          isSelected={firstFieldNumbers.includes(i + 1)}
          key={i + 1}
          numberButton={i + 1}
          onClick={() => handleFirstNumberClick(i + 1)}
        />
      ))}
    </>
  )
}
