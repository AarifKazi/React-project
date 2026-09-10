const express = require("express")
const cors = require("cors")
require("dotenv").config()

const transporter = require('./Middleware/main')

const app = express()

app.use(cors());//middleware
app.use(express.json())//middleware

app.get('/', (req, res) => {
    res.send('welcome to Moon technology')
})

app.post('/send-email',async (req, res) => {
    const { name, email, phoneno, subject, msg } = req.body

    try {

        await transporter.sendMail({

            from: process.env.EMAIL_USER,

            to: process.env.EMAIL_USER,

            subject: subject,

            html: `
                <h2>New Contact Form</h2>

                <p><b>Name:</b> ${name}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>Phone:</b> ${phoneno}</p>
                <p><b>Service:</b> ${subject}</p>
                <p><b>Message:</b> ${msg}</p>
            `
        });

        res.json({
            success: true,
            message: "Email Sent Successfully"
        });


    } catch (err) {

        console.log(err);

        res.status(500).json({
            success: false,
            message: "Email Not Sent"
        });

    }
})

app.listen(5000, () => {
    console.log('server runnig on http://localhost:5000');
})