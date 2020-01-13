import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { TableauExtension, TableauDialog, TableauDialogOpen } from 'tableau-extensions'

const Home = () => {
  return (
  	<button><TableauDialogOpen url="popup" dimensions={{height: 200, width: 300}}>
	  	Click to view the list of worksheets!
	  </TableauDialogOpen></button>
	)
}

const Popup = () => {
	const [worksheetList, setWorksheetList] = useState([]);

	const dialogBuildFunction = () => {
		const worksheets = window.tableau.extensions.dashboardContent.dashboard.worksheets;
    setWorksheetList(worksheets.map(worksheet => worksheet.name));
	}

  return (
  	<TableauDialog buildFunc={dialogBuildFunction}>
	  	<h1>Worksheets:</h1>
	  	<ul>{worksheetList.map(worksheet => <li>{worksheet}</li>)}</ul>
  	</TableauDialog>
  )
}

const Example = () => {
  return (   
    <TableauExtension> 
      <BrowserRouter>
        <Switch>
           <Route path="/" component={Home} exact />
           <Route path="/popup" component={Popup} />
        </Switch>
      </BrowserRouter>
    </TableauExtension>
  );
}

export default Example