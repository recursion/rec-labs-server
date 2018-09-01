const nodemailer = require('nodemailer');
const env = require('../.env');

const smtpConfig = {
    host: 'smtp.recursionslaboratory.com',
    port: 587,
    secure: true, // upgrade later with STARTTLS
    auth: {
        user: env.sendmail.user,
        pass: env.sendmail.pass 
    }
};

const transporter = nodemailer.createTransport(smtpConfig)

module.exports = (req, res, next) => {
    console.log('contact controller called with: ', req.body);

    let mailOptions = {
        from: env.sendmail.from, // sender address
        to: env.sendmail.to, // list of receivers
        subject: req.body.subject, // Subject line
        text: `Message from ${req.body.email}
        req.body.message
        `, // plain text body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500);
            return res.send('Error');
        }
        console.log('Message sent: ', info);
        res.status(200);
        res.send('Ok');
    })
};