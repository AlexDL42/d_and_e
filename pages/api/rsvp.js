import nodemailer from "nodemailer";

export default async (req, res) => {
  const { firstName, lastName, phone, email, events, word } = req.body;

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
    let outHtml = `<p><strong>Someone submitted an RSVP!</strong></p><br>
                    <ul>
                        <li><strong>First name: </strong> ${firstName}</li>
                        <li><strong>Last name: </strong> ${lastName}</li>
                        <li><strong>Email: </strong> ${email}</li>
                        <li><strong>Events Attendance: </strong> ${firstName}</li>
                `
    outHtml += "<ul>"
    Object.keys(events).forEach((k) => {
        outHtml += `<li>${events[k]['title']}: ${events[k]['confirmed']}, +${events[k]['nbPlus']}</li>`
  
    })

    if (word) {
        outHtml += `</ul></ul><br><p><strong>Cette personne vous a laissé un petit mot: </strong></p><p style='margin-left: 40px'>${word}</p>`
    }
    return outHtml
  }

  try {
    await transporter.sendMail({
      from: email,
      to: "adl42.pro@gmail.com, a.delfosselegat@gmail.com",
      subject: `Mariage D&E - RSVP ${firstName} ${lastName}`,
      html: `${buildHtml()}`
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
};