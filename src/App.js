import React from 'react'
import Main from './Main'
// import Search from './Search'
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
    BooksAPI.update(book, shelf);
    
    this.fetchBooks()
  }

  render() {
    return (
      <div className="app">
        {/* <Search /> */}
        <Main 
          books={this.state.books}
          moveBookToShelf={this.moveBookToShelf}
        />
      </div>
    )
  }
}

export default BooksApp