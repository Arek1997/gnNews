import { useTranslation } from 'react-i18next';
import LandSwap from './lang-swap/LangSwap';
import NewsLayoutSwap from './news-layout-swap/NewsLayoutSwap';

interface Props {
	toggleModal: () => void;
}

const Controls = ({ toggleModal }: Props) => {
	const { t } = useTranslation();

	return (
		<div className='controls navbar-end flex items-center lg:w-full'>
			<div className='dropdown-left dropdown lg:hidden'>
				<label tabIndex={0} className='btn-ghost btn'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-5 w-5 md:h-8 md:w-8'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M4 6h16M4 12h8m-8 6h16'
						/>
					</svg>
				</label>
				<ul
					tabIndex={0}
					className='dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-slate-600/80 p-2 shadow-2xl backdrop-blur-sm'
				>
					<li>
						<button className='btn h-auto' onClick={toggleModal}>
							{t('header.Project summary')}
						</button>
					</li>

					<li>
						<NewsLayoutSwap />
					</li>

					<li>
						<LandSwap />
					</li>
				</ul>
			</div>

			<div className='hidden lg:flex lg:items-center lg:gap-x-6'>
				<button className='btn h-auto' onClick={toggleModal}>
					{t('header.Project summary')}
				</button>

				<NewsLayoutSwap />

				<LandSwap />
			</div>
		</div>
	);
};

export default Controls;
