import NewsLayoutSwap from './news-layout-swap/NewsLayoutSwap';

interface Props {
	toggleModal: () => void;
}

const Controls = ({ toggleModal }: Props) => {
	return (
		<div className='controls navbar-end flex items-center md:w-full'>
			<div className='dropdown-left dropdown md:hidden'>
				<label tabIndex={0} className='btn-ghost btn'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-5 w-5'
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
					className='dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow'
				>
					<li>
						<button className='btn' onClick={toggleModal}>
							Project Summary
						</button>
					</li>

					<li>
						<NewsLayoutSwap />
					</li>
				</ul>
			</div>

			<div className='hidden md:flex md:items-center md:gap-x-6'>
				<button className='btn' onClick={toggleModal}>
					Project Summary
				</button>
				<NewsLayoutSwap />
			</div>
		</div>
	);
};

export default Controls;
