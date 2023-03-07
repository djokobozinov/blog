export const validateEmail = (mail: string): boolean => {
	if (!mail) {
		return false;
	}
	const emailReg =
		// eslint-disable-next-line no-useless-escape
		/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	if (emailReg.test(mail)) {
		return true;
	}
	return false;
};
