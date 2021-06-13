if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const { sheets, auth } = require('googleapis/build/src/apis/sheets');
const sheetsAPI = sheets('v4');
const RANGE = 'A2';
const SPREADSHEET_ID = process.env.sheet_id;
const KEY = JSON.parse(process.env.safile);
const nodemailer = require('nodemailer');

const mailserver = {
    name: 'xtracts.tunaaaaroom.ca',
    host: process.env.smtp_host,
    port: process.env.smtp_port,
    secure: process.env.smtp_secure,
    auth: {
        user: process.env.smtp_user,
        pass: process.env.smtp_password
    }
};

const subscribeNewsletterEmailBody = `
  New user has subscribed at the website.
  Check https://docs.google.com/spreadsheets/d/1M-ZRVLselTFe-8WG0xmPCouO7YjkAJVftsSc58dZt9I/edit?usp=sharing for mail list.
`;

const sendMail = async (mailserver, email, subject, email_body) => {
    const mail = {
        from: `Xtracts <${process.env.smtp_mail_from}>`,
        to: email,
        subject: subject,
        text: email_body
    };

    // create a nodemailer transporter using smtp
    const transporter = nodemailer.createTransport(mailserver);

    // send mail using transporter
    const info = await transporter.sendMail(mail);

    console.log(`Preview: ${nodemailer.getTestMessageUrl(info)}`);
};

const jwtClient = new auth.JWT(
    KEY.client_email,
    null,
    KEY.private_key,
    [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets'
    ],
    null
);

exports.subscribeNewsletter = (req, res) => {
    // console.log(`KEY.client_email: ${KEY.client_email}`);
    /**
     * TODO: sending email to users
     * to send email to users, instead of using email_to env variable,
     * replace logic to send email to supplied email address. */
    res.set('Access-Control-Allow-Origin', '*');
    if (req.method === 'OPTIONS') {
        // Send response to OPTIONS requests
        res.set('Access-Control-Allow-Methods', 'POST');
        res.set('Access-Control-Allow-Headers', 'Content-Type');
        res.set('Access-Control-Max-Age', '3600');
        res.status(204).send('');
    } else {
        jwtClient.authorize((err, tokens) => {
            if (err) {
                return console.log('error during jwtClient authorization: ', err);
            }

            const body = {
                values: req.body
            };

            sheetsAPI.spreadsheets.values.append(
                {
                    auth: jwtClient,
                    spreadsheetId: SPREADSHEET_ID,
                    range: RANGE,
                    valueInputOption: 'RAW',
                    resource: body
                },
                async (err, result) => {
                    if (err) {
                        console.log(err);
                        res.status(500).send(err);
                    } else {
                        try {
                            await sendMail(
                                mailserver,
                                process.env.email_to,
                                process.env.email_subject,
                                subscribeNewsletterEmailBody
                            );
                        } catch (err) {
                            console.error(err);
                            throw err;
                        }

                        res.send({ data: 'You have been subscribed!' });
                    }
                }
            );
        });
    }
};
