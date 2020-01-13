import React, { Component, Fragment } from 'react'

import { TableauExtension } from 'tableau-extensions'

export default class App extends Component {
  render () {
    return (
      <Fragment>
        <TableauExtension>This is a Tableau Extension</TableauExtension>
      </Fragment>
    )
  }
}
