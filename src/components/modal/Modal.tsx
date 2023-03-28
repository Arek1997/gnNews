import { createPortal } from 'react-dom';

interface Props {
	children: React.ReactNode;
	open: boolean;
	onClose: () => void;
}

const Modal = ({ children, open, onClose }: Props) => {
	const showModal = open ? 'modal-open' : '';

	return createPortal(
		<div
			className={`modal ${showModal} modal-bottom sm:modal-middle`}
			onClick={(e) => {
				if ((e.target as HTMLElement).matches('div.modal')) {
					onClose();
				}
			}}
		>
			<div className='modal-box'>
				{children}

				<div className='modal-action'>
					<button className='btn-primary btn' onClick={onClose}>
						Close
					</button>
				</div>
			</div>
		</div>,
		document.getElementById('modal')
	);
};

export default Modal;
