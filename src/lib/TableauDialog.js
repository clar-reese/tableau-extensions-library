import React, { useState, Fragment } from 'react';

const TableauDialog = ({buildFunc = null, children}) => {
	const [isInitialized,setIsInitialized] = useState(false);

	if (!isInitialized) {
		window.tableau.extensions.initializeDialogAsync()
			.then(function (payload) {
				if (buildFunc !== null) {
		        	if (payload !== "") {
		        		buildFunc(JSON.parse(payload));
		        	} else { 
		        		buildFunc();
		        	}
		        }
		        setIsInitialized(true);
		    });
	}

	return <Fragment>{ isInitialized && <Fragment>{children}</Fragment> }</Fragment>
}

export default TableauDialog