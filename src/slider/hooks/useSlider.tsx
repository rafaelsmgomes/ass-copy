import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'

export type SlidesType = {
  step: number
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
}
type ArrowStatusType = 'inactive' | 'active'
type ArrowStateType = {
  left: ArrowStatusType
  right: ArrowStatusType
}

const SlidesContext = createContext<SlidesType | undefined>(undefined)

export const SlidesProvider = ({ children }: { children: ReactNode }) => {
  const [step, setStep] = useState(0)
  const [slidesCount, setSlidesCount] = useState(0)
  const nextStep = () => {
    setStep((cur) => (cur += 1))
  }
  const prevStep = () => {
    setStep((cur) => (cur -= 1))
  }
  const restart = () => {
    setStep(0)
  }
  const goToStep = (num: number) => {
    setStep(num)
  }

  const [activeSlide, setActiveSlide] = useState(0)

  const [arrowStatus, setArrowStatus] = useState<ArrowStateType>({ left: 'inactive', right: 'active' })

  return (
    <SlidesContext.Provider
      value={{
        step,
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
