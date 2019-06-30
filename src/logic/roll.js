import { DICE_TYPES, ROLL_MODES } from './enums';
import { storeDieRoll } from '../services/stats';
import { Random, MersenneTwister19937 } from 'random-js';

const randomGen = new Random(MersenneTwister19937.autoSeed());

// TODO: better random number generator
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
			const rolledValue = dieMaxValue === 100 ?
				// Perc dice return multiples of 5, range [5, 100].
				5 * getRandomArbitrary(1, 20) :
				// Every other dice returns a value between [1, dieMaxValue].
				getRandomArbitrary(1, dieMaxValue) ;

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
