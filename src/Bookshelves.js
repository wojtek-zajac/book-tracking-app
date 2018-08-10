import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import CurrentlyReadingShelf from './CurrentlyReadingShelf'
import WantToReadShelf from './WantToReadShelf'
import ReadShelf from './ReadShelf'

class Bookshelves extends Component {

state = {
    books: []
}

componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({ books })
      })
  }

render() {
    
    return(
        <div className="list-books-content">
                
            <CurrentlyReadingShelf 
                books={this.state.books}
            />

            <WantToReadShelf 
                books={this.state.books}
            />

            <ReadShelf 
                books={this.state.books}
            />

        </div>
        )
    }
}

export default Bookshelves