import { createTransport, Transporter } from 'nodemailer';

export default function handler(req, res) {
	const { subject, text } = req.body as { subject: string; text: string };
	const transporter: Transporter = createTransport({
		service: 'gmail',
		auth: {
			user: process.env.EMAIL,
			pass: process.env.PASSWORD,
		},
	});
	const mailOptions = {
		from: process.env.EMAIL,
		to: 'djoko.bozinov@gmail.com',
		subject: subject,
		text: text,
	};
	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent: ' + info.response);
		}
	});
	res.status(200).json({ message: 'Email sent' });
}
