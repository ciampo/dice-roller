import { h } from 'preact';
import { Link } from 'preact-router/match';
import Natural20Logo from './logo';
import style from './style';

const Header = () => (
	<header class={style.header}>
		<Link
			class={style.title}
			activeClassName={style.active}
			href="/"
		>
			<span className={style.logoAltText}>
				Natural 20
			</span>
			<Natural20Logo />
		</Link>
		<nav>
			<Link
				activeClassName={style.active}
				href="/"
			>
				Roll
			</Link>
			<Link
				activeClassName={style.active}
				href="/stats"
			>
				Stats
			</Link>
			<Link
				activeClassName={style.active}
				href="/settings"
			>
				Settings
			</Link>
		</nav>
	</header>
);

export default Header;
