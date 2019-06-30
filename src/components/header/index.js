import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Header = () => (
	<header class={style.header}>
		<span>Roll the Dice</span>
		<nav>
			<Link activeClassName={style.active} href="/">Roll</Link>
			<Link activeClassName={style.active} href="/stats">Stats</Link>
		</nav>
	</header>
);

export default Header;
