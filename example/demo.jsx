const React = require('react')
const ReactDOM = require('react-dom')
const TableList = require('../index.jsx')
const getMuiTheme = require('material-ui/styles/getMuiTheme').default
const baseTheme = require('material-ui/styles/baseThemes/darkBaseTheme')
const container = document.createElement('div')
const items = require('./items')

document.body.appendChild(container)

const onItemSelect = (item) => {
  console.log('item selected: ', item)
}

const Main = React.createClass({
  getChildContext () {
    return {muiTheme: getMuiTheme(baseTheme)}
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object.isRequired
  },

  render () {
    return (
      <TableList
        header='Albums'
        addNewText='Album'
        items={items}
        showMetaData='rating'
        warningToolTipText='Not Rated'
        searchIndex='description'
        onItemSelect={onItemSelect}
      />
    )
  }
})

ReactDOM.render(
  <Main />,
  container
)
