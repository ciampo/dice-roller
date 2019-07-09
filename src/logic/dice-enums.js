import D2Icon from '../components/dice/d2';
import D4Icon from '../components/dice/d4';
import D6Icon from '../components/dice/d6';
import D8Icon from '../components/dice/d8';
import D10Icon from '../components/dice/d10';
import D12Icon from '../components/dice/d12';
import D20Icon from '../components/dice/d20';
import D100Icon from '../components/dice/d100';

const DICE_TYPES = {
	d2: 2,
	d4: 4,
	d6: 6,
	d8: 8,
	d10: 10,
	d12: 12,
	d20: 20,
	d100: 100
};

const DICE_ICONS = {
	d2: D2Icon,
	d4: D4Icon,
	d6: D6Icon,
	d8: D8Icon,
	d10: D10Icon,
	d12: D12Icon,
	d20: D20Icon,
	d100: D100Icon
};

const ROLL_MODE_NORMAL = 'NORMAL';
const ROLL_MODE_ADVANTAGE = 'ADVANTAGE';
const ROLL_MODE_DISADVANTAGE = 'DISADVANTAGE';

const ROLL_MODES = {
	[ROLL_MODE_ADVANTAGE]: 'Adv',
	[ROLL_MODE_NORMAL]: 'Normal',
	[ROLL_MODE_DISADVANTAGE]: 'Dis'
};

export {
	DICE_TYPES,
	ROLL_MODES,
	DICE_ICONS,
	ROLL_MODE_NORMAL,
	ROLL_MODE_ADVANTAGE,
	ROLL_MODE_DISADVANTAGE
};
