import { Link } from 'react-router-dom';
import { countryList } from '../../../../data/countries';
import { scrollToTop } from '../../../../helpers/functions';

const CountriesList = () => {
	return (
		<ul className='m-4 mr-2 max-h-[300px] overflow-y-auto sm:max-h-[500px]'>
			{countryList.map((country, index) => {
				const countryPath = country.name.replace(' ', '-');

				return (
					<Link
						to={`/country/${countryPath.toLowerCase()}`}
						className='my-4 block transition-colors hover:bg-primary/70'
						key={country.name + index}
						onClick={scrollToTop}
					>
						<li className='flex items-center gap-x-5'>
							<img
								className='w-[30px]'
								src={country.flagUrl}
								alt={country.name}
							/>
							<span>{country.name}</span>
						</li>
					</Link>
				);
			})}
		</ul>
	);
};

export default CountriesList;
