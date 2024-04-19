import { Button } from '@/components/ui/button'
import clsx from 'clsx'

import s from './ticketButton.module.scss'

type Props = {
  isDisabled?: boolean
  isSelected: boolean
  numberButton: number
  onClick: () => void
}

export const TicketButton = ({ isDisabled, isSelected, numberButton, onClick }: Props) => {
  const classNames = {
    buttonsStyle(isSelected: boolean) {
      return clsx(isSelected && s.activeItem)
    },
  }

  return (
    <Button className={classNames.buttonsStyle(isSelected)} disabled={isDisabled} onClick={onClick}>
      {numberButton}
    </Button>
  )
}
