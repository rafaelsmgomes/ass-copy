import { createContext, Dispatch, ReactNode, SetStateAction, useCallback, useContext, useEffect, useState } from 'react'
import { useAppSelector } from '../../redux'
import { selectQuestionsLength } from '../../redux/questions/questionSelectors'

export type SlidesType = {
  nextStep: () => void
  prevStep: () => void
  goToStep: (num: number) => void
  restart: () => void
  activeSlide: number
  setActiveSlide: Dispatch<SetStateAction<number>>
  arrowStatus: ArrowStateType
  setArrowStatus: Dispatch<SetStateAction<ArrowStateType>>
  slidesCount: number
  setSlidesCount: Dispatch<SetStateAction<number>>
  visitedSlides: number
  slidesHeight: number
  setSlidesHeight: Dispatch<SetStateAction<number>>
  setMaxSlidesHeight: (num: number) => void
}
type ArrowStatusType = 'inactive' | 'active'
type ArrowStateType = {
  left: ArrowStatusType
  right: ArrowStatusType
}

const SlidesContext = createContext<SlidesType | undefined>(undefined)

export const SlidesProvider = ({ children }: { children: ReactNode }) => {
  const questionsLength = useAppSelector(selectQuestionsLength)

  const [activeSlide, setActiveSlide] = useState(6)
  const [slidesCount, setSlidesCount] = useState(questionsLength + 2 - 1)
  const [visitedSlides, setVisitedSlides] = useState(0)

  const nextStep = useCallback(() => {
    setActiveSlide((cur) => (cur += 1))
  }, [])
  const prevStep = useCallback(() => {
    setActiveSlide((cur) => (cur -= 1))
  }, [])
  const restart = useCallback(() => {
    setActiveSlide(0)
  }, [])
  const goToStep = useCallback((num: number) => {
    setActiveSlide(num)
  }, [])

  const [arrowStatus, setArrowStatus] = useState<ArrowStateType>({ left: 'inactive', right: 'active' })

  const [slidesHeight, setSlidesHeight] = useState(0)
  const setMaxSlidesHeight = useCallback((num: number) => {
    setSlidesHeight((cur) => {
      if (num > cur) return num
      else return cur
    })
  }, [])

  useEffect(() => {
    if (activeSlide > visitedSlides) {
      setVisitedSlides(activeSlide)
    }
  }, [activeSlide, visitedSlides])

  return (
    <SlidesContext.Provider
      value={{
        visitedSlides,

        nextStep,
        prevStep,
        restart,
        arrowStatus,
        setArrowStatus,
        goToStep,
        setSlidesCount,
        slidesCount,
        activeSlide,
        setActiveSlide,
        setMaxSlidesHeight,
        setSlidesHeight,
        slidesHeight,
      }}
    >
      {children}
    </SlidesContext.Provider>
  )
}

export const useSlider = () => {
  const ctx = useContext(SlidesContext)
  if (ctx === undefined) throw new Error('useSlider must be within a Control')
  return ctx
}
