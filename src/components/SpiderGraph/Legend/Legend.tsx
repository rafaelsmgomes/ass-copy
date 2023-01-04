import { ReactComponent as Check } from '../../../assets/svgs/check-icon.svg'
import { ReactComponent as Wrong } from '../../../assets/svgs/x-icon.svg'

import './Legend.scss'

export type LegendProps = {
  visible: boolean
}

const Legend = ({ visible }: LegendProps) => {
  return (
    <div className={`legend ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <div className='flex w-full items-center justify-center gap-4'>
        <p>Legend:</p>
        <div className='flex items-center gap-2'>
          <Check />
          <p>Current Strength</p>
        </div>
        <div className='flex items-center gap-2'>
          <Wrong />
          <p>Improvement Area</p>
        </div>
      </div>
    </div>
  )
}

export default Legend
