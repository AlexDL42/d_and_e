import cn from 'classnames'
import {useState, useEffect} from 'react'
import {buildStrTimeLeft} from '../lib/utils';

type Props = {
  preview?: boolean
}

const Alert = ({ preview }: Props) => {
  
  const dateEvt = new Date(2023, 2, 15, 18, 0, 0, 0);

  const [alertStr, setAlertStr] = useState(() => {
    const out = buildStrTimeLeft({'dateEnd':dateEvt, 'msgEnd': "And... It's on!", 'precision': 'd'})
    return out
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      const tmp = buildStrTimeLeft({'dateEnd':dateEvt, 'msgEnd': "And... It's on!", 'precision': 'd'})
      setAlertStr(tmp);

    }, 1000);
    return () => clearTimeout(timer);
  }, [alertStr]);

  return (
    <div
      className={cn('border-b', {
        'bg-neutral-800 border-neutral-800 text-white': preview,
        'bg-neutral-50 border-neutral-200': !preview,
      })}
    >
      <div>
        <div className="py-2 text-center text-lg">
            {alertStr}             
        </div>
      </div>
    </div>
  )
}

export default Alert
