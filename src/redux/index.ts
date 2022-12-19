import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import questionSlice from './questions/questionsSlice'

export const rootReducers = combineReducers({
  questions: questionSlice.reducer,
})

const store = configureStore({
  reducer: rootReducers,
})

export type RootState = ReturnType<typeof rootReducers>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export type SelectorType = Parameters<typeof useAppSelector>[0]

export default store
