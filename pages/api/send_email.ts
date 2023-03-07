import { createTransport, Transporter } from 'nodemailer';

export default async function handler(req, res) {
	const { subject, text } = req.query as { subject: string; text: string };
	const transporter: Transporter = createTransport({
		service: 'gmail',
		auth: {
			user: process.env.NEXT_PUBLIC_EMAIL,
			pass: process.env.NEXT_PUBLIC_PASSWORD,
		},
	});
	const mailOptions = {
		from: process.env.NEXT_PUBLIC_EMAIL,
		to: 'djoko.bozinov@gmail.com',
		subject: subject,
		text: text,
	};
	await new Promise((resolve, reject) => {
		transporter.sendMail(mailOptions, function (error, info) {
			if (error) {
				console.log(error);
				reject(error);
			} else {
				console.log('Email sent: ' + info.response);
				resolve(info);
			}
		});
	});
	res.status(200).json({ message: 'Email sent' });
}
