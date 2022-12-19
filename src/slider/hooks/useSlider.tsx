import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react'
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

  const nextStep = () => {
    setActiveSlide((cur) => (cur += 1))
  }
  const prevStep = () => {
    setActiveSlide((cur) => (cur -= 1))
  }
  const restart = () => {
    setActiveSlide(0)
  }
  const goToStep = (num: number) => {
    setActiveSlide(num)
  }

  const [arrowStatus, setArrowStatus] = useState<ArrowStateType>({ left: 'inactive', right: 'active' })

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
