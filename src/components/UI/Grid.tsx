import { ReactNode } from 'react'

export type GridProps = {
  className?: string
  children: ReactNode
}

const Grid = ({ className, children }: GridProps) => {
  return <div className='relative mx-auto max-w-[1345px] px-[50px]'>{children}</div>
}

export default Grid
