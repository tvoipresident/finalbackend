const transporter = require('./transporter');

const sendWelcomeMessage = async (userEmail) => {
    try {
        await transporter.sendMail({
            from: '"Assignment 4" bereketorysbay@mail.ru',
            to: userEmail,
            subject: 'Register',
            text: 'You have been registered into our website.'
        });
        console.log('Welcome message sent successfully');
    } catch (error) {
        console.error('Error sending welcome message:', error);
    }
};

module.exports = sendWelcomeMessage;
