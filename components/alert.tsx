import cn from 'classnames'
import {useState, useEffect} from 'react'

type Props = {
  preview?: boolean
}

function pad(num, size) {
  num = num.toString();
  while (num.length < size) num = "0" + num;
  return num;
}

const buildStrTimeLeft = () => {
  const dateEvt = new Date(2023, 2, 15, 18, 0, 0, 0);
  const dateNow = new Date();

  let timeLeft = dateEvt.getTime() - dateNow.getTime();
  if (timeLeft < 0) {
    return "And... It's on!"
  } else{
    const diffInDays = Math.floor(timeLeft / (1000 * 3600 * 24))
    timeLeft -= diffInDays * 1000 * 3600 * 24

    const diffInHours =  Math.floor(timeLeft / (1000 * 3600))
    timeLeft -= diffInHours * 1000 * 3600

    const diffInMin =  Math.floor(timeLeft / (1000 * 60))
    timeLeft -= diffInMin * 1000 * 60

    const diffInSec =  Math.floor(timeLeft / 1000)
    timeLeft -= diffInSec * 1000

    let out = ""
    if (diffInDays>0) {
      out = `${Number(diffInDays)} jours, `
    }

    out += `${pad(diffInHours, 2)}h ${pad(diffInMin, 2)}min`
    // out += `${pad(diffInHours, 2)}:${pad(diffInMin, 2)}:${pad(diffInSec, 2)}`
    return out
  }
}


const Alert = ({ preview }: Props) => {
  const [alertStr, setAlertStr] = useState(() => {
    const out = buildStrTimeLeft()
    return out
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      const tmp = buildStrTimeLeft();
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
        <div className="py-2 text-center text-sm">
          
            {alertStr}             
        </div>
      </div>
    </div>
  )
}

export default Alert
