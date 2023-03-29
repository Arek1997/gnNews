import { countryList } from '../../data/countries';
import { LANGUAGE_KEY } from '../constans';

export const getSelectedCountry = (identifier: string) =>
	countryList.find((country) => country.name.toLowerCase() === identifier);

export const scrollToTop = () =>
	document.body.scrollIntoView({
		behavior: 'smooth',
	});

export const transformDate = (data: Date | string) =>
	new Intl.DateTimeFormat(getLanguage(), {
		dateStyle: 'full',
		timeStyle: 'medium',
	}).format(new Date(data));

export const getLanguage = () => localStorage.getItem(LANGUAGE_KEY) || 'en';
