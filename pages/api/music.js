import nodemailer from "nodemailer";

export default async (req, res) => {
  const { song } = req.body;

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
    const outHtml = `<p><strong>Quelqu'un vous suggère une chanson!</strong></p><p style='margin-left: 40px'>${song}</p>`
    return outHtml
  }

  try {
    await transporter.sendMail({
      from: 'someone',
      to: "adl42.pro@gmail.com",
      subject: `Mariage D&E - Music Suggestion`,
      html: `${buildHtml()}`
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
};