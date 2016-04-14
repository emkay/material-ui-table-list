# material-ui-table-list
Render a list of things in columns

<img src="https://raw.githubusercontent.com/emkay/material-ui-table-list/master/example/table-list.gif">

## Install

`npm i material-ui-table-list`

## Use

```javascript
const React = require('react')
const ReactDOM = require('react-dom')
const TableList = require('material-ui-table-list')
const container = document.createElement('div')
const items = require('./items')

document.body.appendChild(container)

const onItemSelect = (item) => {
  console.log('item selected: ', item)
}

ReactDOM.render(
  <TableList
    header='Albums'
    addNewText='Album'
    items={items}
    showMetaData='rating'
    warningToolTipText='Not Rated'
    searchIndex='description'
    onItemSelect={onItemSelect}
  />,
  container
)
```
