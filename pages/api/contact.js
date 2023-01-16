import nodemailer from "nodemailer";

export default async (req, res) => {
  const { firstName, lastName, phone, email, events } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    }
  });

  const buildHtml = ()  => {
    let evtHtml = `<p>${firstName} ${lastName} submitted an RSVP:</p><br>
                    <p><strong>Email: </strong> ${email}</p><br>
                    <p><strong>Phone: </strong> ${phone}</p><br>
                    <p><strong>Events Attendance: </strong></p><br>
                `
    evtHtml += "<ul>"
    Object.keys(events).forEach((k) => {
      evtHtml += `<li>${k}: ${events[k]['confirm']}, +${events[k]['nbPlus']}</li>`
  
    })
    evtHtml += '</ul>'

    return evtHtml
  }
 

  try {
    await transporter.sendMail({
      from: email,
      to: "adl42.pro@gmail.com",
      subject: `Mariage D&E - RSVP ${firstName} ${lastName}`,
      html: `${buildHtml()}`
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
};