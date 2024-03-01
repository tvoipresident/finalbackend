const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true, 
    auth: {
        user: 'bereketorysbay@mail.ru',
        pass: 'Sex3pA2p8Utm11GUwa25'
    }
});

module.exports = transporter;
