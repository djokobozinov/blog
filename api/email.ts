import { ApiClient } from './api_client';

export const sendEmail = async ({
	subject,
	text,
}: {
	subject: string;
	text: string;
}) => {
	try {
		return await ApiClient.get(`/send_email?subject=${subject}&text=${text}`, );
	} catch (error) {
		if (error.response) {
			return error.response;
		}
	}
};
