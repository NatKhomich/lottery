import { useSelector } from 'react-redux'

import { selectLotteryResult } from '@/app/model/lotterySelectors'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

export const ResultCard = () => {
  const result = useSelector(selectLotteryResult)

  return (
    <Card>
      <Typography variant={'title'}>Билет 1</Typography>
      <Typography variant={'subtitle1'}>{result}</Typography>
    </Card>
  )
}
