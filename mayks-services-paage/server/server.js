require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

// Serve static files from React build folder (if deployed together)
const buildPath = path.join(__dirname, '../build');
app.use(express.static(buildPath));

// Email sending route
app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  // Input validation
  if (!name || !email || !message) {
    return res.status(400).send({ message: 'All fields are required.' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.SENDER_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SENDER_EMAIL,
    to: process.env.RECIPIENT_EMAIL,
    subject: `New Contact Us Message from ${name}`,
    html: `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <title>New Contact Message</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', sans-serif; background-color: #f5f7fa;">
          <table width="100%" cellpadding="0" cellspacing="0" style="padding: 30px 0;">
            <tr>
              <td align="center">
                <table width="600" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);">
                  
                  <!-- Header -->
                  <tr style="background-color: #B47F69;">
                    <td align="center" style="padding: 30px;">
                      <img src="/img/proto-logo.png" alt="Logo" style="max-height: 40px;" />
                    </td>
                  </tr>
  
                  <!-- Body -->
                  <tr>
                    <td style="padding: 40px; color: #212121;">
                      <h2 style="margin-top: 0; color: #212121;">📬 New Message Received</h2>
                      <p style="color: #212121;">You've received a new message from your website contact form:</p>
  
                      <table cellpadding="8" cellspacing="0" style="width: 100%; font-size: 15px; color: #212121;">
                        <tr>
                          <td style="font-weight: bold; color: #B47F69;">Name:</td>
                          <td style="color: #212121;">${name}</td>
                        </tr>
                        <tr>
                          <td style="font-weight: bold; color: #B47F69;">Email:</td>
                          <td style="color: #212121;">${email}</td>
                        </tr>
                        <tr>
                          <td style="font-weight: bold; color: #B47F69;">Subject:</td>
                          <td style="color: #212121;">Contact Form Submission</td>
                        </tr>
                        <tr>
                          <td style="font-weight: bold; color: #B47F69;">Message:</td>
                          <td style="color: #212121;">
                            <div style="background-color: #f9f9f9; padding: 12px; border-radius: 6px; border: 1px solid #B47F69;">
                              ${message}
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
  
                  <!-- Footer -->
                  <tr>
                    <td align="center" style="background-color: #f1f3f5; padding: 20px; color: #888; font-size: 13px;">
                      Sent from <strong>mayksservices.com</strong> | This is an automated email.
                    </td>
                  </tr>
  
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `,
  };



  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send({ message: 'An internal error occurred.' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
