import Button from '../../components/button'
import './styles.scss'

export default function Home() {
	return (
		<main>
			<header>
				<h1>Home Page</h1>
				<span>The entry-point</span>
			</header>

			<hr />

			<section>
				<Button content={'Get something'} />
			</section>
		</main>
	)
}
