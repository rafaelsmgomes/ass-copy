import { ReactNode } from 'react'

import './Grid.scss'

export type GridProps = {
  className?: string
  children: ReactNode
}

const Grid = ({ className, children }: GridProps) => {
  return <div className={`my-grid ${className ? className : ''}`}>{children}</div>
}

export default Grid
