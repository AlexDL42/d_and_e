
import {caseIsEvenType} from '../interfaces/utils';

export const caseIsEven = ({num, returnEven, returnOdd}: caseIsEvenType) => {
    if(num % 2==0){
        return returnEven
    }
    else {
        return returnOdd
    }       
}


const monthShort = [
    'Jan',
    'Fev',
    'Mar',
    'Avr',
    'May',
    'Jun',
    'Jul',
    'Août',
    'Sept',
    'Oct',
    'Nov',
    'Dec'
];

export const formatDateShort = (dt: string) => {
    let out =  ""
    let tmp = dt.split('-')
    out = `${tmp[2]} ${monthShort[Number(tmp[1])-1]}.`
    return out
};






import {buildStrTimeLeftType} from '../interfaces/utils';

export function pad(num: number, size: number) {
    let numStr = num.toString();
    while (numStr.length < size) numStr = "0" + numStr;
    return numStr;
}

export const buildStrTimeLeft = ({dateEnd, msgEnd, precision='d', labels=['j', 'h', 'm', 's']}: buildStrTimeLeftType) => {
    const dateNow = new Date();
  
    let timeLeft = dateEnd.getTime() - dateNow.getTime();

    if (timeLeft < 0) {
      return msgEnd

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
        out = `${Number(diffInDays)} ${labels[0]}`
      }
  
      switch (precision) {
        case 'd':
            return out
        case 'h':
            out +=  `, ${pad(diffInHours, 2)} ${labels[1]}`
            return out
        case 'm':
            out +=  `, ${pad(diffInMin, 2)} ${labels[2]}`
            return out
        case 's':
            out +=  `, ${pad(diffInSec, 2)} ${labels[3]}`
            return out
        default:
            out +=  `, ${pad(diffInSec, 2)} ${labels[3]}`
            return out
      }
    }
  }