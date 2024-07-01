import nodemailer from "nodemailer";

export interface User {
  username: string;
  location: string;
  email: string;
  level: string;
}

export const sendMail = async (user: any) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.AUTH_USER_EMAIL,
      pass: process.env.AUTH_USER_EMAIL_PASS,
    },
  });

  const SENDER_EMAIL = process.env.AUTH_USER_EMAIL;

  const RECEIVER_EMAIL = user.email;

  const FRONTEND_URL = `${process.env.FRONTEND_URL}?id=${user._id}`;

  if (!SENDER_EMAIL) {
    throw new Error("Sender's email address not found");
  }
  const message = {
    from: "Survey Testing",
    to: RECEIVER_EMAIL,
    subject: "Survey Result",
    html:
      `<h2>Dear ${user.username}</h2>` +
      `<h3>Please visit the link to check your result:</h3>` +
      `<p><strong>Click Here:</strong> ${FRONTEND_URL}</p>`,
  };

  await transporter.sendMail(message);
};
