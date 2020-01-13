import React, { useState, Fragment } from 'react';

const TableauDialog = ({buildFunc, children}) => {
	const [isInitialized,setIsInitialized] = useState(false);

	if (!isInitialized) {
		window.tableau.extensions.initializeDialogAsync()
			.then(function (payload) {
		        payload !== "" ? buildFunc(JSON.parse(payload)) : buildFunc();
		        setIsInitialized(true);
		    });
	}

	return <Fragment>{ isInitialized && <Fragment>{children}</Fragment> }</Fragment>
}

export default TableauDialog