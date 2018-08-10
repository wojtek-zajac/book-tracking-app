import React from 'react'
import Main from './Main'
// import Search from './Search'
// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
        {/* <Search /> */}
        <Main />
      </div>
    )
  }
}

export default BooksApp
