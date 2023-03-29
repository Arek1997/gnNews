import { Link } from 'react-router-dom';
import useModal from '../../../hooks/useModal';
import Modal from '../../modal/Modal';
import Controls from './controls/Controls';
import ProjectSummary from './project-summary/ProjectSummary';

const Header = () => {
	const { showModal, toggleModal } = useModal();

	return (
		<header className='min-h-16 flex items-center bg-primary md:h-24'>
			<div className='container flex items-center justify-between'>
				<div className='logo'>
					<Link to='/'>
						<h1 className='btn flex-nowrap text-2xl font-normal normal-case text-slate-200 md:text-3xl'>
							<span className='text-secondary'>gn</span>News
						</h1>
					</Link>
				</div>
				<Controls toggleModal={toggleModal} />
			</div>

			<Modal open={showModal} onClose={toggleModal}>
				<ProjectSummary />
			</Modal>
		</header>
	);
};

export default Header;
