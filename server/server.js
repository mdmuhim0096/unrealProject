const express = require("express");
const cors = require("cors");
const app = express();

const nodemailer = require('nodemailer');

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
}));

app.post("/send",  async(req, res) => {
    const {name, email, message} = req.body;
    try {
   
        const myEmail = 'muhinking765@gmail.com';
        // Create a transporter object using Gmail's SMTP
        let transporter = nodemailer.createTransport({
            service: 'gmail',  // Use 'gmail', or replace with your service provider
            auth: {
                user: myEmail,  // Your email
                pass: 'hsid peyu ukim bsik'    // Your password (use an App password for Gmail)
            }
        });
        let mailOptions = {
            from: email,  // Sender address
            to: myEmail,  // Recipient(s)
            subject: "Help",  // Subject line Plain text body
            html: `<br>User: ${name} <br> Email: ${email} <br> <br> Message: ${message}`  // HTML body (optional)
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                res.send("error!")
                return console.log(error);
            }
            console.log('Email sent: ' + info.response);
            res.status(200).json({message: "sent successfully"});
            res.send("sent successfully");
        });
    }catch(err){
        console.log(err);
    }
});

app.listen(5001, () => {
    console.log("http://localhost:5001");
});