import nodemailer from 'nodemailer';
import { activationTemplate } from './template/activationTemplete';

let transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST,
  port: process.env.EMAIL_SERVER_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_SERVER_USER, // generated ethereal user
    pass: process.env.EMAIL_SERVER_PASSWORD, // generated ethereal password
  },
});

/**
 * @param  {String} name
 * @param  {String} email
 * @param  {String} url
 */

export const sendActivationEmail = async (name, email, url) => {
  const mailOptions = {
    from: `${process.env.BRAND_NAME} < ${process.env.EMAIL_SERVER_USER}>`,
    to: email,
    subject: `Signup to ${process.env.CLIENT_URL}`,
    html: activationTemplate(name, url),
  };
  await transporter.sendMail(mailOptions);
};
