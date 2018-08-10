import React, { Component } from 'react'
import ListBooksTitle from './ListBooksTitle'
import Bookshelves from './Bookshelves'
import OpenSearch from './OpenSearch'

class Main extends Component {
    render() {
        // console.log(this.props.books)
        return (
            <div className="list-books">
                <ListBooksTitle />
                <Bookshelves />
                <OpenSearch />
          </div>
        )
    }
}

export default Main