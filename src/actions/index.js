

const booksRequested = () => {
  return {
    type: 'FETCH_BOOKS_REQUEST'
  }
}


const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks
  }
};

const booksError = (error) => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: error
  }
}

export const bookAddedToCard = (bookId) => {
  return {
    type: 'BOOK_ADD_TO_CARD',
    payload: bookId
  }
}

export const bookRemovedToCard = (bookId) => {
  return {
    type: 'BOOK_REMOVED_TO_CARD',
    payload: bookId
  }
}

export const allBookRemovedToCard = (bookId) => {
  return {
    type: 'ALL_BOOK_REMOVED_TO_CARD',
    payload: bookId
  }
}

// const fetchBooksOld = (dispatch, bookstoreService) => () => {
//   dispatch(booksRequested());
//   bookstoreService.getBooks()
//   .then((data) => dispatch(booksLoaded(data)))
//   .catch((err) => dispatch(booksError(err)));
// };

const fetchBooks = (bookstoreService) => () => (dispatch) => {
  dispatch(booksRequested());
  bookstoreService.getBooks()
  .then((data) => dispatch(booksLoaded(data)))
  .catch((err) => dispatch(booksError(err)));
}

export {
  fetchBooks
};