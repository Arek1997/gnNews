import { useTranslation } from 'react-i18next';
import { LANGUAGE_KEY } from '../../../../../helpers/constans';
import { getLanguage } from '../../../../../helpers/functions';

const LangSwap = () => {
	const { t, i18n } = useTranslation();
	const defaultLang = getLanguage();

	return (
		<div className='form-control'>
			<label className='label'>
				<span className='text-center text-slate-200'>
					{t('header.Choose Language')}
				</span>
			</label>
			<select
				className='select-primary select select-sm'
				defaultValue={defaultLang}
				onChange={(e) => {
					const { value } = e.target;

					localStorage.setItem(LANGUAGE_KEY, value);
					i18n.changeLanguage(value);
				}}
			>
				<option value='en'>EN</option>
				<option value='pl'>PL</option>
			</select>
		</div>
	);
};

export default LangSwap;
