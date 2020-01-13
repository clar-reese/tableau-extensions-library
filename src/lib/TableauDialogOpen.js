import React from 'react';

const TableauDialogOpen = ({
	url,
	dimensions = {},
	payload = null,
	onClose = null,
	children }) => {

	const openDialog = () => {
		window.tableau.extensions.ui.displayDialogAsync(
			url,
			payload,
			dimensions
		).then((closePayload) => onClose()
		).catch((error) => {
			switch (error.errorCode) {
				// Closing the popup leads to an error condition
				case window.tableau.ErrorCodes.DialogClosedByUser:
					console.log('Dialog was closed by user');
					break;
				default:
					console.error(error.message);
			}
		});
	}


	return (
		<span onClick={() => openDialog()}>
			{children}
		</span>
	)
}

export default TableauDialogOpen