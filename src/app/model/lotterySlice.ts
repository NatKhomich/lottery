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
    calculateResult: state => {
      const generatedFirstNumbersSet = new Set<number>()

      while (generatedFirstNumbersSet.size < 8) {
        generatedFirstNumbersSet.add(Math.floor(Math.random() * 19) + 1)
      }
      const generatedFirstNumbers = Array.from(generatedFirstNumbersSet)

      console.log(generatedFirstNumbers)

      const generatedSecondNumber = Math.floor(Math.random() * 2) + 1

      console.log(generatedSecondNumber)
      const firstFieldMatches = state.firstFieldNumbers.filter(num =>
        generatedFirstNumbers.includes(num)
      ).length

      console.log(firstFieldMatches)
      const secondFieldMatches = generatedSecondNumber === state.secondFieldNumber ? 1 : 0

      if (firstFieldMatches >= 4 || (firstFieldMatches >= 3 && secondFieldMatches === 1)) {
        console.log('firstFieldMatches', firstFieldMatches)
        console.log('secondFieldMatches', secondFieldMatches)
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
      console.log(state.firstFieldNumbers)
    },
    setSecondFieldNumber: (state, action: PayloadAction<number>) => {
      state.secondFieldNumber = action.payload
      console.log(state.secondFieldNumber)
    },
  },
})

export const { calculateResult, resetLottery, setFirstFieldNumbers, setSecondFieldNumber } =
  lotterySlice.actions

export default lotterySlice.reducer
