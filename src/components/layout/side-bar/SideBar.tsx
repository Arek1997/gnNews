import CountriesList from './country-list/CountriesList';

const SideBar = () => {
	return (
		<>
			<aside className='overflow-hidden rounded-lg bg-primary-focus/10 md:sticky md:top-5 md:min-w-[270px] lg:min-w-[300px]'>
				<h2 className='bg-primary p-2 text-center font-semibold text-slate-200'>
					Countries list:
				</h2>
				<CountriesList />
			</aside>
		</>
	);
};

export default SideBar;
