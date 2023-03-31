import { vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Modal from '../Modal';

describe('Modal conponent', () => {
	const handleClose = vi.fn();
	const modalWrapper = document.createElement('div');
	modalWrapper.setAttribute('id', 'modal');
	document.body.append(modalWrapper);

	it('should NOT BE visibe by default', () => {
		render(
			<Modal open={false} onClose={handleClose}>
				<p>Modal content</p>
			</Modal>
		);

		const modal = screen.getByTestId('modal');

		expect(modal.className).not.toMatch('modal-open');
	});

	it('should render Modal with provided paragraph', () => {
		render(
			<Modal open={true} onClose={handleClose}>
				<p>Modal content</p>
			</Modal>
		);

		const modal = screen.getByTestId('modal');
		const paragraph = screen.getByText(/modal content/i);

		expect(modal).toBeInTheDocument();
		expect(modal.className).toMatch('modal-open');
		expect(paragraph).toBeInTheDocument();

		fireEvent.click(screen.getByRole('button'));

		expect(handleClose).toBeCalledTimes(1);
	});
});
