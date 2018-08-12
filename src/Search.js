import React, { Component } from 'react'
import SearchBar from './SearchBar'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import sortBy from 'sort-by'
import SearchNotification from './SearchNotification'

class Search extends Component {

    state = {
        query: '',
        queryBooks: [],
    }

    updateQuery = (query) => {
        this.setState({
            query: query
        })
        this.updateSearchedBooks(query)
    }

    clearQuery = () => {
        this.setState({
            query: ''
        })
    }

    updateSearchedBooks = (query) => {
        if (query) {
            BooksAPI.search(query)
            .then((queryBooks) => {
                if (queryBooks.error) {
                    this.setState({
                        queryBooks: [] 
                    })
                } else {
                    this.setState({
                        queryBooks
                    })
                }
            })
        } else {
            this.setState({ queryBooks: [] })
        }
    }

    render() {
        this.state.queryBooks.sort(sortBy('title'))

        return (
            <div className="search-books">
                <SearchBar 
                    query={this.state.query}
                    updateQuery={this.updateQuery}
                />

            {(this.state.queryBooks.length === 0 && this.state.query !== '') && (             
                <SearchNotification 
                    clearQuery={this.clearQuery}
                />
            )}

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
                            return (
                                <li key={queryBook.id}>
                                    <Book 
                                        book={queryBook}
                                        moveBookToShelf={this.props.moveBookToShelf}
                                        currentShelf={defaultShelf}
                                    />
                                </li>
                            )
                        }) 
                    : ''
                }
              </ol>
            </div>
          </div>
        )
    }
}

export default Search