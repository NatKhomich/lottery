import { ResultCard } from '@/features/resultCard'
import { TicketCard } from '@/features/ticketCard'

import s from './app.module.scss'

export function App() {
  return (
    <div className={s.container}>
      <TicketCard />
      <ResultCard />
    </div>
  )
}
