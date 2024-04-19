import { RootState } from '@/app/model/store'

export const selectLotteryResult = (state: RootState) => state.lottery.result
export const selectFirstFieldNumbers = (state: RootState) => state.lottery.firstFieldNumbers
export const selectSecondFieldNumbers = (state: RootState) => state.lottery.secondFieldNumber
