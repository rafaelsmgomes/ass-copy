import { useEffect, useState } from 'react'

export const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const handleResize = () => setWidth(window.innerWidth)

  useEffect(() => {
    addEventListener('resize', handleResize)
    return removeEventListener('resize', handleResize)
  }, [])

  return width
}
