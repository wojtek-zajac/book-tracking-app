import React, { Component } from 'react'
import Book from './Book'

class Bookshelf extends Component {

    render() {
        return(          
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.bookshelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">

                        {
                            this.props.books
                                .filter(book =>
                                    book.shelf === this.props.bookshelfId)
                                .map(book => (

                                    <li key={book.id}>

                                        <Book 
                                            book={book}
                                            moveBookToShelf={this.props.moveBookToShelf}
                                        />
                                    </li>  
                                ))
                        }

                    </ol>
                </div>
            </div>
        )
    }
}

export default Bookshelf