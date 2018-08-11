import React from 'react'
// import Main from './Main'
import Search from './Search'
import './App.css'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {

  state = {
    books: []
  }

  fetchBooks() {
    BooksAPI.getAll()
        .then((books) => {
            this.setState({ books })
    })
  }

  componentDidMount() {
    this.fetchBooks()
  }

  moveBookToShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(response => {
        this.fetchBooks()
      })
  }

  render() {
    return (
      <div className="app">
        <Search 
          moveBookToShelf={this.moveBookToShelf}
        />
        {/* <Main 
          books={this.state.books}
          fetchBooks={this.fetchBooks}
          moveBookToShelf={this.moveBookToShelf}
        /> */}
      </div>
    )
  }
}

export default BooksApp