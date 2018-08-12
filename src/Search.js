import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import {DebounceInput} from 'react-debounce-input'
import sortBy from 'sort-by'

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
        this.setState({query: ''})
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

        this.state.queryBooks.sort(sortBy('title'))

        return (
            <div className="search-books">

                <div className="search-books-bar">
                    
                    <Link 
                        to='/'
                        className="close-search"
                    >Close</Link>

                    <div className="search-books-input-wrapper">
                        <DebounceInput
                            autoFocus
                            minLength={1}
                            debounceTimeout={300}
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


            {(this.state.queryBooks.length === 0 && this.state.query !== '') && (             
                <div className='notification'>
                    <span className='notification-text'>No results!</span>
                    <button className='reset-query-button' onClick={this.clearQuery}>Reset</button>
                </div>
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

                            return(
                                    this.state.queryBooks.length !==0 ?

                                <li 
                                    key={queryBook.id}>
                                        <Book 
                                            book={queryBook}
                                            moveBookToShelf={this.props.moveBookToShelf}
                                            currentShelf={defaultShelf}
                                        />
                                </li>
                                :
                                <p>No results</p>
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