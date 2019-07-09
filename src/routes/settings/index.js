import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

import style from './style';

export default class Settings extends Component {
	componentDidMount() {

	}

	render() {
		return (
			<main class="pageWrapper">
				<section class={style.section}>
					<h1 class="visuallyHidden">
						Settings
					</h1>

					<h2>
						This app has not reached level&nbsp;20 just&nbsp;yet!
					</h2>

					<p>
						More options will appear in this page in the&nbsp;near&nbsp;future.
					</p>

					<p>
						If you need help on how to use this app, you can <Link href="/help">see&nbsp;the&nbsp;tutorial.</Link>
					</p>
				</section>
			</main>
		);
	}
}
