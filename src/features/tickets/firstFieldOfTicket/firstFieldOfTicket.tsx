import { TicketButton } from '@/features/tickets/ticketButton/ticketButton'

type Props = {
  selectedFirstNumbers: number[]
  setSelectedFirstNumbers: (selectedFirstNumbers: number[]) => void
}
export const FirstFieldOfTicket = ({ selectedFirstNumbers, setSelectedFirstNumbers }: Props) => {
  const handleFirstNumberClick = (number: number) => {
    if (selectedFirstNumbers.includes(number)) {
      setSelectedFirstNumbers(selectedFirstNumbers.filter(num => num !== number))
    } else {
      setSelectedFirstNumbers([...selectedFirstNumbers, number])
    }
  }

  return (
    <>
      {Array.from({ length: 19 }, (_, i) => (
        <TicketButton
          isDisabled={selectedFirstNumbers.length >= 8 && !selectedFirstNumbers.includes(i + 1)}
          isSelected={selectedFirstNumbers.includes(i + 1)}
          key={i + 1}
          numberButton={i + 1}
          onClick={() => handleFirstNumberClick(i + 1)}
        />
      ))}
    </>
  )
}
