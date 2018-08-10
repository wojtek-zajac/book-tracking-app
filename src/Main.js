import React, { Component } from 'react'
import ListBooksTitle from './ListBooksTitle'
import Bookshelf from './Bookshelf'
import OpenSearch from './OpenSearch'

class Main extends Component {
    render() {
        return (
            <div className="list-books">
                <ListBooksTitle />

                <div className="list-books-content">
                        <Bookshelf />
                        <Bookshelf />
                        <Bookshelf />
                </div>

                <OpenSearch />
                
          </div>
        )
    }
}

export default Main