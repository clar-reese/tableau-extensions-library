import React, { Fragment } from 'react';

const TableauExtension = ({
  // URL of the content of the config dialog
  configDialogUrl = null,
  // Width and height of the config popup dialog e.g. { height: 230, width: 400 } 
  configDialogDimensions = {}, 
  // Additional function to run upon initialization
  initFunc = null,
  children}) => {

  let isInitialized = false;

  // Create configuration popup dialog
  const configure = () => { 
    window.tableau.extensions.ui.displayDialogAsync(
      configDialogUrl, null, configDialogDimensions )
    .then()
    .catch((error) => {
      switch (error.errorCode) {
        case window.tableau.ErrorCodes.DialogClosedByUser:
          console.log('Dialog was closed by user');
          break;
        default:
          console.error(error.message);
      }
    });
  }

  // Initialize the extension
  if (!isInitialized) {
    window.tableau.extensions
      .initializeAsync(configDialogUrl !== null ? {configure: configure} : null)
      .then(function() { 
        console.log("Initialize API")
        isInitialized = true
        if (initFunc !== null) {
          initFunc();
        }
      });
  }

  return <Fragment>
    { isInitialized &&
        <Fragment>{children}</Fragment>
    }</Fragment>
}
 
export default TableauExtension;