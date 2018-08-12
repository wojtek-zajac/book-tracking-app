import React, { Component } from 'react'

class SearchNotification extends Component {
    render() {
        return (
            <div className='notification'>
                    <span className='notification-text'>No results!</span>
                    <button 
                        className='reset-query-button'
                        onClick={
                            this.props.clearQuery
                        }
                    >
                    Reset
                    </button>
            </div>
        )
    }
}

export default SearchNotification