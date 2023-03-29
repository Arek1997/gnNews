import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../../../../hooks/reduxHook';
import { setLayout } from '../../../../../store/newsLayout-slice';

const NewsLayoutSwap = () => {
	const { t } = useTranslation();

	const dispatch = useAppDispatch();
	return (
		<div className='form-control'>
			<label className='label'>
				<span className='text-center text-slate-200'>
					{t('header.Choose News Layout')}
				</span>
			</label>
			<select
				className='select-primary select select-sm'
				defaultValue='list'
				onChange={(e) =>
					dispatch(setLayout(e.target.value as 'list' | 'tiles'))
				}
			>
				<option value='list'>{t('header.List')}</option>
				<option value='tiles'>{t('header.Tiles')}</option>
			</select>
		</div>
	);
};

export default NewsLayoutSwap;
