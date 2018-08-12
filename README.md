# MyReads App Overview
---
#### _[Udacity](https://udacity.com/) Project_

This is the complete project of the [Udacity's starter template](https://github.com/udacity/reactnd-project-myreads-starter) for the React Fundamentals course. 

The goal of this project was to add interactivity to the app by refactoring the static code in the template.


### Table of Contents

* [Specification](#specification)
* [Installation and Run](#installation-and-run)
* [What You're Getting](#what-you're-getting)
* [Backend Server](#backend-server)
* [Important - Search Terms](#important---search-terms)
* [Create React App](#create-react-app)


### Specification

* The application was created with create-react-app and requires only npm install and npm start to get it installed and launched.
* The main page shows 3 shelves for books, and each book is shown on the correct shelf.
* The main page shows a control that allows users to move books between shelves. The control should be tied to each book instance. The functionality of moving a book to a different shelf works correctly.
* When the browser is refreshed, the same information is displayed on the page.
* The search page has a search input field.
* The search page behaves correctly:
    * As the user types into the search field, books that match the query are displayed on the page.
    * Search results are not shown when all of the text is deleted out of the search input box.
    * Invalid queries are handled and prior search results are not shown.
    * The search works correctly when a book does not have a thumbnail or an author. (To test this, try searching for "poetry" and "biography").
    * The user is able to search for multiple words, such as “artificial intelligence.”
* Search results on the search page allow the user to select “currently reading”, “want to read”, or “read” to place the book in a certain shelf.
* If a book is assigned to a shelf on the main page and that book appears on the search page, the correct shelf should be selected on the search page. If that book's shelf is changed on the search page, that change should be reflected on the main page as well. The option "None" should be selected if a book has not been assigned to a shelf.
* When an item is categorized on the search page and the user navigates to the main page, it appears on that shelf in the main page.
* The main page contains a link to the search page. When the link is clicked, the search page is displayed and the URL in the browser’s address bar is /search.
* The search page contains a link to the main page. When the link is clicked, the main page is displayed and the URL in the browser’s address bar is /.
* Component state is passed down from parent components to child components. The state variable is not modified directly - setState() function is used correctly.
* Books have the same state on both the search page and the main application page: If a book is on a bookshelf, that is reflected in both locations.
* All JSX code is formatted properly and functional.


## Instalation and Run

To get started using the app:

* clone/download the repo with `git clone https://github.com/wojtek-zajac/book-tracking-app.git`
* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing was not required.
    ├── Book.js # Book component
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── Bookshelf.js # Bookshelf component
    ├── BookshelfChanger.js # BookshelfChanger component
    ├── icons #
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    ├── index.js # It is used for DOM rendering only.
    ├── ListBooksTitle.js # Title component
    ├── Main.js # Main component
    ├── Search.js # Search page component
    ├── SearchBar.js # Search bar component
    └── SearchNotifications.js # Search notifications component
```


## Backend Server

To simplify the development process, a backend server has been provided to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods that were used to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important - Search Terms
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).