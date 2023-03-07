import { createTransport, Transporter } from 'nodemailer';

export default async function handler(req, res) {
	const { subject, text } = req.query as { subject: string; text: string };
	const transporter: Transporter = await createTransport({
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
	await transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent: ' + info.response);
		}
	});
	res.status(200).json({ message: 'Email sent' });
}
