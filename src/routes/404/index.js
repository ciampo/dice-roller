import { h } from 'preact';
import { Link } from 'preact-router/match';
import buttonStyle from '../../components/button/style';

import style from './style';

const FourOhFour = () => (
	<div class="pageWrapper">
		<h1 class={style.title}>
			You rolled a nat 1!
		</h1>

		<p class={style.description}>
			The requested page is not available.
		</p>

		<Link
			href="/"
			class={[
				buttonStyle.buttonBase,
				buttonStyle.buttonPrimary,
				style.homeButton
			].join(' ')}
		>
			Home
		</Link>
	</div>
);

export default FourOhFour;
