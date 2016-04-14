const React = require('react')
const ReactDOM = require('react-dom')
const TableList = require('../index.jsx')
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
