import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {DebounceInput} from 'react-debounce-input'

class SearchBar extends Component {
    render() {
        return (
            <div className="search-books-bar">
                    <Link 
                        to='/'
                        className="close-search"
                    >
                    Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        <DebounceInput
                            autoFocus
                            minLength={1}
                            debounceTimeout={300}
                            type="text"
                            placeholder="Search by title or author"
                            value={this.props.query}
                            onChange={(event) =>
                                this.props.updateQuery(
                                    event.target.value
                                )
                            }
                        />
                    </div>
            </div>
        )
    }
}

export default SearchBar