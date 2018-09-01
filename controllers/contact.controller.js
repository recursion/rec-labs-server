const nodemailer = require('nodemailer');
const sanitize = require('sanitize');
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
    const { subject, email, message } = sanitize().primitives(req.body);

    let mailOptions = {
        from: env.sendmail.from, // sender address
        to: env.sendmail.to, // list of receivers
        subject: subject, // Subject line
        text: `RecLabs Message from ${email}


        ${message}
        `, // plain text body
    };

    if (process.env.NODE_ENV === 'production') {
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
    }
    console.log('Constructed: ', mailOptions);
    console.log('Not sent in any mode but production.');
    res.status(200);
    res.send('Ok');
};