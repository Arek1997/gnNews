import { useTranslation } from 'react-i18next';

const ProjectSummary = () => {
	const { t } = useTranslation();

	return (
		<>
			<h2 className='mb-4 text-lg font-bold text-slate-300'>
				{t('header.Project summary')}
			</h2>

			<div className='flex flex-col gap-y-2'>
				<p>
					<span className='mr-2 text-slate-200'>
						<span className='text-secondary'>gn</span>News
					</span>
					był to ciekawy projekt, w którym mogłem nauczyć się nowych technologii
					oraz przypomnieć sobie wcześniejsze.
				</p>
				<p>Nowe technologie, które zastosowałem to:</p>
				<ul className='list-inside list-disc pl-4 font-semibold text-slate-300'>
					<li>
						<a
							href='https://daisyui.com/'
							target='_blank'
							rel='noopener noreferrer'
							className='link-hover link'
						>
							daisyUI
						</a>
					</li>
					<li>
						<a
							href='https://www.i18next.com/'
							target='_blank'
							rel='noopener noreferrer'
							className='link-hover link'
						>
							i18next
						</a>
					</li>
				</ul>

				<h3 className='my-3 font-bold text-slate-300'>
					Co sprawiło mi frajdę.
				</h3>

				<p>
					Zakochałem się w
					<a
						href='https://daisyui.com/'
						target='_blank'
						rel='noopener noreferrer'
						className='link-hover link mx-2 font-semibold text-slate-300'
					>
						daisyUI.
					</a>
					Już praca z Tailwindem znacząco poprawiła mój DX oraz przyśpieszyła
					pracę, a tutaj odkryłem taką bibliotekę gotowych komponentów. Napisana
					jest na podstawie Tailwinda, na pewno wykorzystam ją jeszcze w
					przyszłości.
				</p>
				<p>
					Ciekawa była też praca z frameworkiem
					<a
						href='https://www.i18next.com/'
						target='_blank'
						rel='noopener noreferrer'
						className='link-hover link mx-2 font-semibold text-slate-300'
					>
						i18next.
					</a>
					Było to moje pierwsze podejście do tłumaczenia strony.
				</p>
				<p>
					Przypomniałem sobie pracę z:
					<span className='ml-2 font-semibold text-slate-300'>
						react-redux, react-router-dom.
					</span>
				</p>
				<p>
					Ostatnie projekty pisałem w
					<a
						href='https://nextjs.org/'
						target='_blank'
						rel='noopener noreferrer'
						className='link-hover link mx-2 font-semibold text-slate-300'
					>
						Next.js
					</a>
					wykorzystuje tam File-Based Routing więc react-router-dom odszedł na
					bok.
				</p>

				<h3 className='my-3 font-bold text-slate-300'>
					Co sprawiło mi trudność.
				</h3>

				<p>
					Wymyślenie designu aplikacji na pewno zajęło mi najwięcej czasu, aby
					nie wyglądał jak
					<span className='mx-2 font-semibold italic text-slate-300 underline'>
						"konar ciosany tępym scyzorykiem"
					</span>
					;D
				</p>

				<p>
					Sporo czasu zajmuje też czytanie dokumentacji, zapoznanie się z nowymi
					rzeczami. Jest to normalna rzecz w codziennej pracy, nie nazwałbym
					tego trudnością.
				</p>
			</div>
		</>
	);
};

export default ProjectSummary;
