import React, { Fragment } from 'react';

const TableauDialog = ({buildFunc, children}) => {
	let isInitialized = false;

	if (!isInitialized) {
		window.tableau.extensions.initializeDialogAsync()
			.then(function (payload) {
		        payload !== "" ? buildFunc(JSON.parse(payload)) : buildFunc();
		        isInitialized = true;
		    });
	}

	return <Fragment>{ isInitialized && <Fragment>{children}</Fragment> }</Fragment>
}

export default TableauDialog