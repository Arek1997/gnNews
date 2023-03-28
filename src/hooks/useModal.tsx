import { useState } from 'react';

const useModal = () => {
	const [showModal, setShowModal] = useState(false);
	const toggleModal = () => setShowModal((prevState) => !prevState);

	return { showModal, toggleModal };
};

export default useModal;
