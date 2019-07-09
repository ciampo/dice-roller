import { isLocalStorageSupported, CACHE_PREFIX } from './localstorage';

const STAT_ITEM_PREFIX = `${CACHE_PREFIX}_STAT`;

const resetStats = () => {
	if (!isLocalStorageSupported || typeof window === 'undefined') {
		return;
	}

	localStorage.removeItem(STAT_ITEM_PREFIX);
};

const getDiceRollKey = (dieMaxValue) => `${STAT_ITEM_PREFIX}_ROLL_D${dieMaxValue}`;

const storeDieRoll = (dieMaxValue, rolledValue) => {
	if (!isLocalStorageSupported || typeof window === 'undefined') {
		return;
	}

	const itemKey = getDiceRollKey(dieMaxValue);

	const storedItem = localStorage.getItem(itemKey);

	let newItem;
	try {
		newItem = storedItem ? JSON.parse(storedItem) : [];
	}
	catch (e) {
		newItem = [];
	}

	newItem.push(rolledValue);

	localStorage.setItem(itemKey, JSON.stringify(newItem));
};

const getDieRollStats = (dieMaxValue) => {
	if (!isLocalStorageSupported || typeof window === 'undefined') {
		return [];
	}

	const storedItem = localStorage.getItem(getDiceRollKey(dieMaxValue));

	let toReturn;
	try {
		toReturn = storedItem ? JSON.parse(storedItem) : [];
	}
	catch (e) {
		toReturn = [];
	}

	return toReturn;
};

export {
	resetStats,
	storeDieRoll,
	getDieRollStats
};
