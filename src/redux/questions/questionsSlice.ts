import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './questionState'

const questionSlice = createSlice({ name: 'question', initialState: initialState, reducers: {} })

export default questionSlice
