import nodemailer from "nodemailer";

export const sendMail = async (user: any) => {
  const transporter = nodemailer.createTransport({
    service: process.env.SMTP_SERVICE_PROVIDER,
    host: process.env.SMTP_HOST,
    port: (process.env.AUTH_USER_EMAIL_PASS, 10) ?? 465,
    secure: true,
    auth: {
      user: process.env.AUTH_USER_EMAIL,
      pass: process.env.AUTH_USER_EMAIL_PASS,
    },
  });

  const SENDER_EMAIL = process.env.AUTH_USER_EMAIL;

  const RECEIVER_EMAIL = user.email;

  const RESULT_LINK = `${process.env.RESULT_LINK}?id=${user._id}`;

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
      `<p><strong>Click Here:</strong> ${RESULT_LINK}</p>`,
  };

  await transporter.sendMail(message);
};
