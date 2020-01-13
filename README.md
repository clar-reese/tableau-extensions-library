# tableau-extensions

> React components for Tableau extensions development

## Install

```bash
yarn add https://github.com/clar-reese/tableau-extensions-library.git
```

## Usage

### Basic Extension
```jsx
import React from 'react'
import { TableauExtension } from 'tableau-extensions'

const Example = () => {
  return (
    <TableauExtension>
      Basic Tableau extension code goes here!
    </TableauExtension>
  )
}
```
### With Configuration Dialog
```jsx
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { TableauExtension } from 'tableau-extensions'

const Home = () => {
  return "Main page content goes here!"
}

const Configure = () => {
  return "Configuration options go here!"
}

const Example {
  return (   
    <TableauExtension
      configDialogUrl="configure"
      configDialogDimensions={{ height: 230, width: 400 }}> 
      <BrowserRouter>
        <Switch>
           <Route path="/" component={Home} exact />
           <Route path="/configure" component={Configure} />
        </Switch>
      </BrowserRouter>
    </TableauExtension>
  );
}
```
### With Popup Dialog
```jsx
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { TableauExtension, TableauDialog, TableauDialogOpen } from 'tableau-extensions'

const Home = () => {
  return <TableauDialogOpen url="popup">Click this to open the dialog!</TableauDialogOpen>
}

const Popup = () => {
  return <TableauDialog>"Popup dialog content goes here!"</TableauDialog>
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
```
