import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import {DebounceInput} from 'react-debounce-input'

class Search extends Component {

    state = {
        query: '',
        queryBooks: []
    }

    updateQuery = (query) => {
        this.setState({
            query: query
        })
        this.updateSearchedBooks(query)
    }

    updateSearchedBooks = (query) => {

        if (query) {
            BooksAPI.search(query)
            .then((queryBooks) => {
                if (queryBooks.error) {
                    this.setState({ queryBooks: [] })
                } else {
                    this.setState( {queryBooks} )
                }
            })
        } else {
            this.setState({ queryBooks: [] })
        }
    }

    render() {
        return (
            <div className="search-books">

                <div className="search-books-bar">
                    
                    <Link 
                        to='/'
                        className="close-search"
                    >Close</Link>

                    <div className="search-books-input-wrapper">
                        <DebounceInput
                            minLength={2}
                            debounceTimeout={400}
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={(event) =>
                                this.updateQuery(
                                    event.target.value
                                )}
                        />
                    </div>

                </div>

            <div className="search-books-results">
              <ol className="books-grid">
                
                {
                    this.state.query ?
                        this.state.queryBooks.map(queryBook => {
                            
                            let defaultShelf = 'none'

                            this.props.books.map(book => (
                                book.id === queryBook.id ?
                                defaultShelf = book.shelf :
                                ''
                            ))

                            return(
                                <li 
                                    key={queryBook.id}>
                                        <Book 
                                            book={queryBook}
                                            moveBookToShelf={this.props.moveBookToShelf}
                                            currentShelf={defaultShelf}
                                        />
                                </li>
                            )
                        }) : 
                    ''
                }
              </ol>
            </div>

          </div>
        )
    }
}

export default Search