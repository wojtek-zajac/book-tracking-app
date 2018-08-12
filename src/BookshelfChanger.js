import React, { Component } from 'react'

class BookshelfChanger extends Component {
    render() {
        return(
            <div className="book-shelf-changer">
                <select
                    onChange={(event) => 
                        this.props.moveBookToShelf(this.props.book, event.target.value)
                    }
                    value={this.props.currentShelf}
                >
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default BookshelfChanger