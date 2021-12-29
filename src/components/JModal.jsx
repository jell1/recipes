import React from "react";
import { Modal, Button } from "react-bootstrap";

// reusable modal component
function JModal({
	children,
	modalOpen,
	setModalOpen,
	location,
	size,
	title,
	onSave,
}) {
	return (
		<>
			<Modal
				size={size}
				aria-labelledby='contained-modal-title-vcenter'
				centered={location === "centered" ? true : false}
				show={modalOpen}
				onHide={() => setModalOpen(false)}
				className='j-modal'>
				<Modal.Header>
					<div className='color-dark'>{title}</div>
				</Modal.Header>
				<Modal.Body>{children}</Modal.Body>
				<Modal.Footer>
					<Button
						size='sm'
						variant='outline-dark'
						onClick={(e) => setModalOpen(false)}>
						Close
					</Button>
					<Button
						size='sm'
						variant='outline-dark'
						onClick={(e) => {
							onSave();
							setModalOpen(false);
						}}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default JModal;
