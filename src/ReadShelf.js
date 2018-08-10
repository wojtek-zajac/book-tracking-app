import React, { Component } from 'react'
import Book from './Book'

class ReadShelf extends Component {
    render() {
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        <li>
                            <Book />
                        </li>
                    </ol>
                </div>
            </div>
        )
    }
}

export default ReadShelf