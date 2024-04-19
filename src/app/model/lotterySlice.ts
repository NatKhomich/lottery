import { generateRandomNumber } from '@/common/utils/generateRandomNumber'
import { generateRandomNumbers } from '@/common/utils/generateRandomNumbers'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type LotteryState = {
  firstFieldNumbers: number[]
  result: string
  secondFieldNumber: number
}

const initialState: LotteryState = {
  firstFieldNumbers: [],
  result: '',
  secondFieldNumber: 0,
}

const lotterySlice = createSlice({
  initialState,
  name: 'lottery',
  reducers: {
    calculateRandom: state => {
      const generatedFirstNumbers = generateRandomNumbers(8)
      const generatedSecondNumber = generateRandomNumber(1, 2)

      state.firstFieldNumbers = generatedFirstNumbers
      state.secondFieldNumber = generatedSecondNumber
    },
    calculateResult: state => {
      const generatedFirstNumbers = generateRandomNumbers(8)
      const generatedSecondNumber = generateRandomNumber(1, 2)

      const firstFieldMatches = state.firstFieldNumbers.filter(num =>
        generatedFirstNumbers.includes(num)
      ).length

      const secondFieldMatches = generatedSecondNumber === state.secondFieldNumber ? 1 : 0

      if (firstFieldMatches >= 4 || (firstFieldMatches >= 3 && secondFieldMatches === 1)) {
        state.result = 'Ого, вы выиграли! Поздравляем!'
      } else {
        state.result = 'К сожалению, вы проиграли.'
      }
    },
    resetLottery: state => {
      state.firstFieldNumbers = []
      state.secondFieldNumber = 0
      state.result = ''
    },
    setFirstFieldNumbers: (state, action: PayloadAction<number[]>) => {
      state.firstFieldNumbers = action.payload
    },
    setSecondFieldNumber: (state, action: PayloadAction<number>) => {
      state.secondFieldNumber = action.payload
    },
  },
})

export const {
  calculateRandom,
  calculateResult,
  resetLottery,
  setFirstFieldNumbers,
  setSecondFieldNumber,
} = lotterySlice.actions

export default lotterySlice.reducer
