import cn from 'classnames'
import {useState, useEffect} from 'react'
import {buildStrTimeLeft} from '../lib/utils';

type Props = {
  preview?: boolean
}

const Alert = ({ preview }: Props) => {
  
  const dateEvt = new Date(2023, 8, 9, 18, 0, 0, 0);
  const precisionTimer = "d" //['d', 'h', 'm', 's']
  const [alertStr, setAlertStr] = useState(() => {
    const out = buildStrTimeLeft({'dateEnd':dateEvt, 'msgEnd': "And... It's on!", 'precision': precisionTimer})
    return out
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      const tmp = buildStrTimeLeft({'dateEnd':dateEvt, 'msgEnd': "And... It's on!", 'precision': precisionTimer})
      setAlertStr(tmp);

    }, 1000);
    return () => clearTimeout(timer);
  }, [alertStr]);

  const displayDate = (dtObj) => {
    const strOut = `${dtObj.getDate()} ${dtObj.getMonth()}`
    return strOut
  }
  return (
    <div
      className={cn('border-b', {
        'bg-neutral-800 border-neutral-800 text-white': preview,
        'bg-neutral-50 border-neutral-200': !preview,
      })}
    >
      <div>
        <div className="py-2 text-center text-lg">
          <div className="flex flex-row justify-around">
            <span>{`Rendez-vous le 9 Septembre 2023!`}</span>
            <strong>{alertStr}</strong>             
          </div>
        </div>
      </div>
    </div>
  )
}

export default Alert
