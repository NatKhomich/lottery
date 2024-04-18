import { RootState } from '@/app/store'

export const selectLotteryResult = (state: RootState) => state.lottery.result
