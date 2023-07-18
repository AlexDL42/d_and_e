import {mailTo, buildHtmlRSVP} from '../../lib/utils.ts';
import nodemailer from "nodemailer";

export const mailTransporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    }
});


export default async (req, res) => {

  let { mailType } = req.body
  mailType = String(mailType)
  let mailSubject = 'Mariage D&E - '
  let outHtml = ''

  switch(String(mailType)) {
    case 'rsvp':
      const { firstName, lastName, phone, email, addressF, addressP, dStart, events, word } = req.body;
      mailSubject += `RSVP ${firstName} ${lastName}`;
      outHtml += buildHtmlRSVP({ firstName, lastName, phone, email, addressF, addressP, dStart, events, word });
      break

    case 'music':
      const { song } = req.body;
      mailSubject += `Music Suggestion`;
      outHtml += `<p><strong>Quelqu'un vous suggère une chanson!</strong></p><p style='margin-left: 40px'>${song}</p>`
      break

    case 'livredor':
      const { msg } = req.body;
      mailSubject += `Contribution au Livre d'Or`;
      outHtml += `<p><strong>Quelqu'un vous a laissé un message sur le Livre d'Or!</strong></p><p style='margin-left: 40px;white-space: pre-line'>${msg}</p>`
      break
    default:
      mailSubject += `Unknown mail type: ${mailType}`;
      outHtml += `<p>Unknown email type sent: ${mailType}, please contact dev team.`
  }


  
  try {
    await mailTransporter.sendMail({
      from: process.env.SMTP_USER,
      to: `${mailTo}`,
      subject: `${mailSubject}`,
      html: `${outHtml}`
    });

  } catch (error) {

    
    return res.status(500).json({ error: error.message || error.toString() });
  }

  
  return res.status(200).json({ error: "" });
};