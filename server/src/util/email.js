const nodemailer = require('nodemailer');

const sendEmail = async options => {

    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        part: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const mailOptions = {
        from: 'Ogloszenia Anglia <hello@ogloszenianglia.co.uk',
        to: options.email,
        subject: options.subject,
        text: options.message
        // html: option.text
    }

    await transporter.sendMail(mailOptions)
}

module.exports = sendEmail;