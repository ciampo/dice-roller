import { h, Component } from 'preact';
import style from './style';
import buttonStyle from '../../components/button/style';

import { DICE_TYPES } from '../../logic/dice-enums';
import { getDieRollStats, resetStats } from '../../storage/stats';

export default class Stats extends Component {
	state = {
		stats: {}
	};

	getStats= () => {
		const stats = {};

		for (const [type, maxValue] of Object.entries(DICE_TYPES)) {
			stats[type] = getDieRollStats(maxValue);
		}

		this.setState({
			stats
		});
	}

	resetStats = () => {
		resetStats();

		this.getStats();
	}

	countTotalRolls(stats) {
		let totRolls = 0;

		Object.entries(stats).forEach(([_, rolls]) => {
			totRolls += rolls.length;
		});

		return totRolls;
	}

	// gets called when this route is navigated to
	componentWillMount() {
		this.getStats();
	}

	// Note: `user` comes from the URL, courtesy of our router
	render({}, { stats }) {
		return (
			<main
				class={[
					'pageWrapper',
					style.stats
				].join(' ')}
			>
				<h1 class="visuallyHidden">
					Roll stats
				</h1>

				<noscript>
					<p class={style.noJs}>
						Please enable JavaScript to&nbsp;see&nbsp;your&nbsp;stats.
					</p>
				</noscript>

				<ul class={style.list}>
					{ Object.entries(stats).map(([dieType, rolls]) => (
						<li
							class={style.dieWrapper}
							key={dieType}
						>
							<h2 class={style.dieType}>
								{dieType}
							</h2>

							<ul class={style.dieStatsTable}>
								<li class={style.dieStatCell}>
									<span class={style.statTitle}>
										Dice rolled
									</span>
									<span class={style.statFigure}>
										{rolls.length === 0 ? '—' : rolls.length}
									</span>
								</li>
								<li class={style.dieStatCell}>
									<span class={style.statTitle}>
										Average ({(DICE_TYPES[dieType] + 1) / 2})
									</span>
									<span class={style.statFigure}>
										{rolls.length === 0 ? '—' :
											(rolls.reduce((sum, val) => sum + val, 0) / rolls.length).toFixed(2)
										}
									</span>
								</li>
								<li class={style.dieStatCell}>
									<span class={style.statTitle}>
										Nat 1s
									</span>
									<span class={style.statFigure}>
										{rolls.length === 0 ? '—' : rolls.filter((val) => val === 1).length}
									</span>
								</li>
								<li class={style.dieStatCell}>
									<span class={style.statTitle}>
										Crits
									</span>
									<span class={style.statFigure}>
										{rolls.length === 0 ? '—' : rolls.filter((val) => val === DICE_TYPES[dieType]).length}
									</span>
								</li>

							</ul>
						</li>
					))}
				</ul>

				<button
					onClick={this.resetStats}
					class={[
						buttonStyle.buttonBase,
						buttonStyle.buttonFlat,
						style.resetButton
					].join(' ')}
					disabled={this.countTotalRolls(stats) === 0}
				>
					Reset stats
				</button>
			</main>
		);
	}
}
