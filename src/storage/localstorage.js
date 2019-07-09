const isLocalStorageSupported = () => {
	if (typeof window === 'undefined') {
		return false;
	}

	const test = 'test';
	try {
		localStorage.setItem(test, test);
		localStorage.removeItem(test);
		return true;
	}
	catch (e) {
		return false;
	}
};

const CACHE_PREFIX = 'RDD';

export {
	isLocalStorageSupported,
	CACHE_PREFIX
};
