import React, { Component } from 'react'
import ListBooksTitle from './ListBooksTitle'
import Bookshelf from './Bookshelf'
import * as BooksAPI from './BooksAPI'

class Main extends Component {

    state = {
        books: []
    }
    
    componentDidMount() {
        BooksAPI.getAll()
            .then((books) => {
                this.setState({ books })
            })
    }
    
    moveBookToShelf = (book, shelf) => {
        BooksAPI.update(book, shelf)
    }

    render() {
        return (
            <div className="list-books">
                <ListBooksTitle />

            <div className="list-books-content">
                <Bookshelf 
                    books={this.state.books}
                    bookshelfTitle='Currently Reading'
                    bookshelfId='currentlyReading'
                    moveBookToShelf={this.state.moveBookToShelf}
                />
                <Bookshelf 
                    books={this.state.books}
                    bookshelfTitle='Want to Read'
                    bookshelfId='wantToRead'
                    moveBookToShelf={this.state.moveBookToShelf}
                />
                <Bookshelf 
                    books={this.state.books}
                    bookshelfTitle='Read'
                    bookshelfId='read'
                    moveBookToShelf={this.state.moveBookToShelf}
                />
            </div>

            <div className="open-search">
                <a 
                    onClick={() => 
                        this.setState({ 
                            showSearchPage: true 
                        })}>
                    Add a book
                </a>
            </div>
          </div>
        )
    }
}

export default Main