import { ReactComponent as Check } from '../../../assets/svgs/check-icon.svg'
import { ReactComponent as Bulb } from '../../../assets/svgs/bulb-icon.svg'

import './Legend.scss'

export type LegendProps = {
  visible: boolean
  className?: string
}

const Legend = ({ visible, className }: LegendProps) => {
  return (
    <div className={`legend tb:px-0 ${visible ? 'opacity-100' : 'opacity-0'} ${className ? className : ''}`}>
      <div className='flex w-full items-center justify-center space-x-4 sm:space-x-2'>
        <p>Legend:</p>
        <div className='flex items-center gap-2 sm:gap-1'>
          <Check />
          <p>Current Strength</p>
        </div>
        <div className='flex items-center gap-2 sm:gap-1'>
          <Bulb height={19} width={19} />
          <p>Improvement Area</p>
        </div>
      </div>
    </div>
  )
}

export default Legend
