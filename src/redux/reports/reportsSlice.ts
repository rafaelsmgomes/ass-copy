import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '..'
import { initialState } from './reportsState'

const reportsSlice = createSlice({
  name: 'reports',
  initialState,
  reducers: {},
})

export default reportsSlice

export const selectReports = (s: RootState) => s.reports
