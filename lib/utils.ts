// -------------------------------------------------------------------------------------
export const mailTo = "weddingdelpecs@gmail.com";

export const buildHtmlRSVP = ({ firstName, lastName, phone, email, addressF, addressP, dStart, events, word})  => {
    let outHtml = `<p><strong>Someone submitted an RSVP!</strong></p><br>
                    <ul>
                        <li><strong>First name: </strong> ${firstName}</li>
                        <li><strong>Last name: </strong> ${lastName}</li>
                        <li><strong>Phone number: </strong> ${phone}</li>
                        <li><strong>Email: </strong> ${email}</li>
                        <li><strong>Adresse à Formentera: </strong> ${addressF}</li>
                        <li><strong>Adresse Postale: </strong> ${addressP}</li>
                        <li><strong>Date d'arrivée à Formentera: </strong> ${dStart}</li>

                        <li><strong>Events Attendance: </strong></li>
                `
    outHtml += "<ul>"
    Object.keys(events).forEach((k) => {
        outHtml += `<li>${events[k]['title']}: ${events[k]['confirmed']}, +${events[k]['nbPlus']}</li>`
  
    })

    if (word) {
        outHtml += `</ul></ul><br><p><strong>Cette personne vous a laissé un petit mot: </strong></p><p style='margin-left: 40px'>${word}</p>`
    }
    return outHtml
};







// -------------------------------------------------------------------------------------
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





// -------------------------------------------------------------------------------------
import {buildStrTimeLeftType} from '../interfaces/utils';

export function pad(num: number, size: number) {
    let numStr = num.toString();
    while (numStr.length < size) numStr = "0" + numStr;
    return numStr;
}

export const buildStrTimeLeft = ({dateEnd, msgEnd, precision='d', labels=['J', 'H', 'M', 'S']}: buildStrTimeLeftType) => {
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
        out = `${labels[0]} - ${Number(diffInDays)}`
      }
  
      if (precision == 'd') {
        return out
      }

      out += `, ${pad(diffInHours, 2)} ${labels[1]}`

      if (precision == 'h') {
        return out
      }

      out += `, ${pad(diffInMin, 2)} ${labels[2]}`

      if (precision == 'm') {
        return out
      }

      out += `, ${pad(diffInSec, 2)} ${labels[3]}`

      if (precision == 's') {
        return out
      }
      
      return `Error in buildStrTimeLeft: precision '${precision}' unknown.`
    }
  }