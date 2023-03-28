import { useAppDispatch } from '../../../../../hooks/reduxHook';
import { setLayout } from '../../../../../store/newsLayout-slice';

const NewsLayoutSwap = () => {
	const dispatch = useAppDispatch();
	return (
		<div className='form-control w-full max-w-xs'>
			<label className='label'>
				<span className='text-slate-200'>Choose News Layout</span>
			</label>
			<select
				className='select-primary select select-sm'
				defaultValue='list'
				onChange={(e) =>
					dispatch(setLayout(e.target.value as 'list' | 'tiles'))
				}
			>
				<option value='list'>List</option>
				<option value='tiles'>Tiles</option>
			</select>
		</div>
	);
};

export default NewsLayoutSwap;
