import { DICE_TYPES, ROLL_MODES } from './dice-enums';
import { storeDieRoll } from '../storage/stats';
import { Random, MersenneTwister19937, browserCrypto } from 'random-js';

const randomGen =
	(
		typeof window !== 'undefined' &&
		'crypto' in window &&
		'getRandomValues' in window.crypto
	) ? new Random(browserCrypto) : new Random(MersenneTwister19937.autoSeed());

const getRandomArbitrary = (min, max) => randomGen.integer(min, max);

const roll = (diceTray, mode) => {
	const results = {};

	Object.entries(diceTray).forEach(([dieType, howMany]) => {
		const dieMaxValue = DICE_TYPES[dieType];

		// Skip if current die is not found amongst the recongnised DICE_TYPES.
		if (!dieMaxValue) {
			return;
		}

		// With advantage and disadvantage,
		// the same die is rolled twice.
		const howManyTimes = mode === ROLL_MODES.NORMAL ? howMany : 2;

		for (let i = 0; i < howManyTimes; i++) {
			const rolledValue = getRandomArbitrary(1, dieMaxValue);

			if (!(dieType in results)) {
				results[dieType] = [];
			}

			results[dieType].push(rolledValue);
			storeDieRoll(dieMaxValue, rolledValue);
		}
	});

	return results;
};

export {
	roll
};
