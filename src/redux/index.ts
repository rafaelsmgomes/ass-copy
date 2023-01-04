import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import answerSlices from './answers/answersSlice'
import blurbsSlice from './blurbs/blurbsSlice'
import questionSlice from './questions/questionsSlice'
import bigBlurbSlice from './bigBlurbs/bigBlurbsSlice'
import reportsSlice from './reports/reportsSlice'

export const rootReducers = combineReducers({
  questions: questionSlice.reducer,
  answers: answerSlices.reducer,
  blurbs: blurbsSlice.reducer,
  bigBlurbs: bigBlurbSlice.reducer,
  reports: reportsSlice.reducer,
})

const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = ReturnType<typeof rootReducers>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export type SelectorType = Parameters<typeof useAppSelector>[0]

export default store
