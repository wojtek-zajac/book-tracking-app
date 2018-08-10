import React, { Component } from 'react'
import CurrentlyReadingShelf from './CurrentlyReadingShelf'
import WantToReadShelf from './WantToReadShelf'
import ReadShelf from './ReadShelf'

class Bookshelves extends Component {
    render() {
        return(
            <div className="list-books-content">
                <CurrentlyReadingShelf />
                <WantToReadShelf />
                <ReadShelf />
            </div>
        )
    }
}

export default Bookshelves