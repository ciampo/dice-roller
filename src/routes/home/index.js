import { h, Component } from 'preact';
import style from './style';
import buttonStyle from '../../components/button/style';

import {
	DICE_TYPES,
	ROLL_MODES,
	DICE_ICONS,
	ROLL_MODE_ADVANTAGE,
	ROLL_MODE_DISADVANTAGE
} from '../../logic/enums';
import { roll } from '../../logic/roll';

const Results = ({ rollResult, mode }) => {
	const rollLabels = [];
	const rollValues = [];

	Object.entries(rollResult).forEach(([dieType, dieRolls]) => {
		dieRolls.forEach((dieRoll) => {
			rollLabels.push({
				dieRoll,
				dieType
			});
			rollValues.push(dieRoll);
		});
	});

	const explanation = mode === ROLL_MODES.NORMAL ?
		(
			rollLabels.map(({ dieRoll, dieType }, index) => (
				<span>
					<span class={style.formulaDieRoll}>{dieRoll}</span>
					<span class={style.formulaDieType}>({dieType})</span>
					{index < rollLabels.length - 1 && (
						<span> + </span>
					)}
				</span>
			))
		) : (
			<span>
				{mode}({rollLabels.map(({ dieRoll }) => dieRoll).join(', ')})
				<span class={style.formulaDieType}>({rollLabels.length > 0 && rollLabels[0].dieType})</span>
			</span>
		);

	const result = mode === ROLL_MODES.NORMAL ?
		rollValues.reduce((sum, val) => sum + val, 0) :
		mode === ROLL_MODES.ADVANTAGE ?
			Math.max(...rollValues) :
			Math.min(...rollValues);

	const containerClass = [
		style.resultContainer
	];

	if (rollLabels.length > 0) {
		containerClass.push(style.resultContainerAnimated);
	}

	const emptyTrayMessage = mode === ROLL_MODES.NORMAL ?
		'Pick some dice first' :
		'Choose one die';

	return (
		<p class={containerClass.join(' ')}>
			<span class={style.formula}>
				{rollLabels.length > 0 ? explanation : 	emptyTrayMessage}
			</span>
			<span class={style.result}>
				{rollLabels.length > 0 ? result : '-'}
			</span>
		</p>
	);
};

const DieButton = ({ dieType, onClick, howMany }) => {
	const counterClass = [style.dieCount];
	if (howMany === 0) {
		counterClass.push(style.dieCountZero);
	}

	const DiceIcon = DICE_ICONS[dieType];

	return (
		<button
			data-die-type={dieType}
			onClick={onClick}
			class={style.dieButton}
			aria-label={`Add a ${dieType}-faces die to the tray.`}
		>
			<DiceIcon />

			<span class={counterClass.join(' ')}>
				{howMany}
			</span>
		</button>
	);
};

class Home extends Component {
	state = {
		mode: ROLL_MODES.NORMAL,
		tray: {},
		rollResult: {}
	}

	addToTray = (event) => {
		const dieType = event.target.dataset.dieType;
		if (!dieType) {
			return;
		}

		const newTray =this.state.mode === ROLL_MODES.NORMAL ?
			 Object.assign({}, this.state.tray) : {};

		if (!(dieType in newTray)) {
			newTray[dieType] = 0;
		}

		newTray[dieType] = newTray[dieType] + 1;

		this.setState({
			tray: newTray
		});
	}

	rollTray = () => {
		// This resets the results every time and allow for the bouncy CSS animation
		// to be run every time.
		this.setState({
			rollResult: {}
		}, () => {
			requestAnimationFrame(() => {
				this.setState({
					rollResult: roll(this.state.tray, this.state.mode)
				});
			});
		});
	}

	clearTray = () => {
		this.setState({
			rollResult: {},
			tray: {}
		});
	}

	setMode = (e) => {
		this.setState({
			mode: e.target.value,
			rollResult: {},
			tray: {}
		},);
	}

	render({}, { tray, rollResult, mode }) {
		return (
			<div class={style.home}>
				<h1 class="visuallyHidden">
					Roll the dice!
				</h1>
				<p class="visuallyHidden">
					Add dice to the tray and click roll!
				</p>

				<div class={style.modeRow}>
					{ Object.keys(ROLL_MODES).map((rollModeId) => (
						<label class={style.modeBox}>
							<input
								type="radio"
								name="roll-mode"
								value={ROLL_MODES[rollModeId]}
								checked={ROLL_MODES[rollModeId] === mode}
								onChange={this.setMode}
								class="visuallyHidden"
							/>

							<span class={style.modeLabel}>
								{ROLL_MODES[rollModeId]}
								{(rollModeId === ROLL_MODE_ADVANTAGE || rollModeId === ROLL_MODE_DISADVANTAGE) && (
									<svg
										viewBox="0 0 256 256"
										xmlns="http://www.w3.org/2000/svg"
										data-direction={rollModeId === ROLL_MODE_DISADVANTAGE ? 'down' : 'up'}
									>
										<g
											fill="none"
											fill-rule="evenodd"
											stroke="currentColor"
											transform="translate(0 -10)"
										>
											<path d="M10 149L128 47l119 102" />
											<path d="M10 210l118-102 119 102" />
										</g>
									</svg>
								)}
							</span>
						</label>
					))}
				</div>

				<div class={style.diceGrid}>
					{ Object.keys(DICE_TYPES).map((dieType) => (
						<DieButton
							key={dieType}
							dieType={dieType}
							onClick={this.addToTray}
							howMany={this.state.tray[dieType] || 0}
						/>
					))}
				</div>

				<div class={style.buttonsRow}>
					<button
						onClick={this.rollTray}
						class={style.rollButton}
						disabled={Object.keys(tray).length === 0}
					>
						Roll
					</button>
					<button
						onClick={this.clearTray}
						class={[
							buttonStyle.buttonReset,
							buttonStyle.buttonFlat,
							style.clearButton
						].join(' ')}
					>
						Clear
					</button>
				</div>

				<section class={style.tray}>

					<Results
						rollResult={rollResult}
						mode={mode}
					/>
				</section>
			</div>
		);
	}
}

export default Home;
