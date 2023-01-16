import nodemailer from "nodemailer";

export default async (req, res) => {
  const { firstName, lastName, phone, email, events } = req.body;
  console.log('a')
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD
    }
  });
  console.log('v')

  const buildHtml = ()  => {
    let evtHtml = `<p>${firstName} ${lastName} submitted an RSVP:</p><br>
                    <p><strong>Email: </strong> ${email}</p><br>
                    <p><strong>Phone: </strong> ${phone}</p><br>
                    <p><strong>Events Attendance: </strong></p><br>
                `
    evtHtml += "<ul>"
    Object(events).keys.forEach((k) => {
      console.log(e)
      evtHtml += `<li>${k}: ${events[k]['confirm']}, +${events[k]['nbPlus']}</li>`
  
    })
    evtHtml += '</ul>'

    console.log(evtHtml)
    return evtHtml
  }
 
  console.log('c')
  try {
    await transporter.sendMail({
      from: email,
      to: "adl42.pro@gmail.com",
      subject: `Mariage D&E - RSVP ${firstName} ${lastName}`,
      html: {buildHtml}
    });
    console.log('g')
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
};