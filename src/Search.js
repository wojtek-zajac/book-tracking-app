import React, { Component } from 'react'
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
                    
                    <a 
                        className="close-search" 
                        onClick={() => 
                            this.setState({ 
                                showSearchPage: false 
                            })}
                    >
                    Close
                    </a>

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
                        this.state.queryBooks.map(
                            queryBook => (
                                <li key={queryBook.id}>
                                    <Book 
                                        book={queryBook}
                                        moveBookToShelf={this.props.moveBookToShelf}
                                    />
                                </li>
                            )
                        )
                        : ''
                }
              
              </ol>
            </div>

          </div>
        )
    }
}

export default Search