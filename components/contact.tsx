import { useEffect, useState } from 'react';
import { sendEmail } from '../api/email';
import { validateEmail } from '../utils/common';

export default function Contact() {
	const [email, setEmail] = useState('');
	const [text, setText] = useState('');
	const [enabled, setEnabled] = useState(false);

	const onSend = () => {
		if (!enabled) {
			return;
		}
		sendEmail({ subject: `GBozhinov.com | Email from: ${email}`, text });
		setEmail('');
		setText('');
	};

	useEffect(() => {
		if (validateEmail(email) && text) {
			setEnabled(true);
		} else {
			setEnabled(false);
		}
	}, [email, text]);
	return (
		<div className='flex flex-col gap-2 border rounded-xl p-4 mt-7'>
			<div className='text-cyan-900'>Contact</div>
			<div className='text-xs text-gray-600'>
				Need a website or mobile app? I can help! As an experienced developer, I
				create customized solutions that meet your needs. Contact me today to
				get started!
			</div>
			<div className='text-sm mt-3 text-cyan-900'>Your email</div>
			<input
				type='email'
				className='rounded border h-10 w-full border-gray-300 focus-visible:border-gray-400 focus-visible:outline-0 px-2 text-sm'
				placeholder='e.q. johny@gmail.com'
				onChange={(e) => {
					setEmail(e.target.value);
				}}
				value={email}
			></input>
			<div className='text-sm text-cyan-900 mt-2'>Message</div>
			<textarea
				className={`w-full h-36 resize-none p-3 border-gray-300 focus-visible:border-gray-400 focus-visible:outline-0 text-sm scrollbar-hide rounded border`}
				placeholder='I have a small restaurant and I need a website...'
				onChange={(e) => {
					setText(e.target.value);
				}}
				value={text}
			></textarea>
			<div className='flex w-full justify-center'>
				<div
					className={`flex items-center justify-center h-10 w-28 border bg-cyan-900 rounded-lg text-sm text-white  ${
						enabled ? 'cursor-pointer hover:bg-cyan-700' : 'opacity-50'
					} `}
					onClick={onSend}
				>
					Send
				</div>
			</div>
		</div>
	);
}
