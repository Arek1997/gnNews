import { countryList } from '../../data/countries';

export const getSelectedCountry = (identifier: string) =>
	countryList.find((country) => country.name.toLowerCase() === identifier);

export const scrollToTop = () =>
	document.body.scrollIntoView({
		behavior: 'smooth',
	});

export const transformDate = (data: Date | string) =>
	new Intl.DateTimeFormat('en-EN', {
		dateStyle: 'full',
		timeStyle: 'medium',
	}).format(new Date(data));
