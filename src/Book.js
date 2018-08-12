import React, { Component } from 'react'
import BookshelfChanger from './BookshelfChanger'

class Book extends Component {
    render() {
        let thumbnail = this.props.book.imageLinks ? 
                        this.props.book.imageLinks.thumbnail : 
                        ''
        return (
            <div className="book">
                <div className="book-top">
                    <div 
                        className="book-cover" 
                        style={{ 
                            width: 128, 
                            height: 193, 
                            backgroundImage: `url(${thumbnail})`
                        }}>
                    </div>
                    <BookshelfChanger 
                        book={this.props.book}
                        moveBookToShelf={this.props.moveBookToShelf}
                        currentShelf={this.props.currentShelf}
                    />
                </div>
                <div className="book-title">
                    {this.props.book.title}
                </div>
                <div className="book-authors">
                    {this.props.book.authors}
                </div>
            </div>
        )
    }
}

export default Book