import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './data/lang/en';
import { pl } from './data/lang/pl';
import { getLanguage } from './helpers/functions';

const resources = {
	en,
	pl,
};

i18n.use(initReactI18next).init({
	resources,
	lng: getLanguage(),
	fallbackLng: 'en',

	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
