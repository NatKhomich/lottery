import { TicketButton } from '@/features/tickets/ticketButton/ticketButton'

type Props = {
  selectedSecondNumber: null | number
  setSelectedSecondNumber: (selectedFirstNumbers: null | number) => void
}
export const SecondFieldOfTicket = ({ selectedSecondNumber, setSelectedSecondNumber }: Props) => {
  const handleSecondNumberClick = (number: number) => {
    setSelectedSecondNumber(number === selectedSecondNumber ? null : number)
  }

  return (
    <>
      {Array.from({ length: 2 }, (_, i) => (
        <TicketButton
          isDisabled={false}
          isSelected={selectedSecondNumber === i + 1}
          key={i + 1}
          numberButton={i + 1}
          onClick={() => handleSecondNumberClick(i + 1)}
        />
      ))}
    </>
  )
}
