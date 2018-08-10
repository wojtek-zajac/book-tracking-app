import React, { Component } from 'react'
import Book from './Book'

class ReadShelf extends Component {
    render() {
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        
                        {
                            this.props.books
                                .filter(book =>
                                    book.shelf === 'read')
                                .map(book => (
                                    <li key={book.id}>
                                        <Book />
                                    </li>  
                                ))
                        }

                    </ol>
                </div>
            </div>
        )
    }
}

export default ReadShelf