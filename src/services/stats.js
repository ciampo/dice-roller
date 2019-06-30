const ITEM_PREFIX = 'RDT_STAT';

const isLocalStorageSupported = () => {
	if (typeof window === 'undefined') {
		return false;
	}

	const test = 'test';
	try {
		window.localStorage.setItem(test, test);
		window.localStorage.removeItem(test);
		return true;
	}
	catch (e) {
		return false;
	}
};

const resetStats = () => {
	if (typeof window !== 'undefined') {
		if (!isLocalStorageSupported) {
			return;
		}

		window.localStorage.clear();
	}
};

const getDiceRollKey = (dieMaxValue) => `${ITEM_PREFIX}_ROLL_D${dieMaxValue}`;

const storeDieRoll = (dieMaxValue, rolledValue) => {
	if (typeof window !== 'undefined') {
		if (!isLocalStorageSupported) {
			return;
		}

		const itemKey = getDiceRollKey(dieMaxValue);

		const storedItem = window.localStorage.getItem(itemKey);

		let newItem;
		try {
			newItem = storedItem ? JSON.parse(storedItem) : [];
		}
		catch (e) {
			newItem = [];
		}

		newItem.push(rolledValue);

		window.localStorage.setItem(itemKey, JSON.stringify(newItem));
	}
};

const getDieRollStats = (dieMaxValue) => {
	if (typeof window !== 'undefined') {
		if (!isLocalStorageSupported) {
			return [];
		}

		const storedItem = window.localStorage.getItem(getDiceRollKey(dieMaxValue));

		let toReturn;
		try {
			toReturn = storedItem ? JSON.parse(storedItem) : [];
		}
		catch (e) {
			toReturn = [];
		}

		return toReturn;
	}

	return [];
};

export {
	resetStats,
	storeDieRoll,
	getDieRollStats
};
