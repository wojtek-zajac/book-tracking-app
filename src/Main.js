import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import ListBooksTitle from './ListBooksTitle'
import Bookshelf from './Bookshelf'

class Main extends Component {
    render() {
        return (
            <div className="list-books">
                <ListBooksTitle />
            <div className="list-books-content">
                <Bookshelf 
                    bookshelfTitle='Currently Reading'
                    bookshelfId='currentlyReading'
                    books={this.props.books}
                    moveBookToShelf={this.props.moveBookToShelf}
                />
                <Bookshelf
                    bookshelfTitle='Want to Read'
                    bookshelfId='wantToRead'
                    books={this.props.books}
                    moveBookToShelf={this.props.moveBookToShelf}
                />
                <Bookshelf 
                    bookshelfTitle='Read'
                    bookshelfId='read'
                    books={this.props.books}
                    moveBookToShelf={this.props.moveBookToShelf}
                />
            </div>
            <div className="open-search">
                <Link to='/search'>
                Add a book
                </Link>
            </div>
          </div>
        )
    }
}

export default Main