import React, {Component} from 'react';
import BookListItem from '../book-list-item';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {withBookstoreService} from '../hoc';
import {bookAddedToCard, fetchBooks} from '../../actions';
import {compose} from '../../utils';

import './book-list.css';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const BookList = ({books, onAddedToCard}) => {
  return (
      <ul className="book-list">
        {
          books.map((book) => {
            return (
                <li key={book.id}>
                  <BookListItem
                      onAddedToCard={() => onAddedToCard(book.id)}
                      book={book}
                  /></li>
            )
          })
        }
      </ul>
  );
}

class BookListContainer extends Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const {books, loading, error, onAddedToCard} = this.props;
    if (error) {
      return <ErrorIndicator/>;
    }

    if (loading) {
      return <Spinner/>;
    }

    return <BookList books={books} onAddedToCard={onAddedToCard}/>;
  }
}

const mapStateToProps = ({bookList: {books, loading, error}}) => {
  return {books, loading, error};
};

const mapDispatchToProps = (dispatch, {bookstoreService}) => {
  return bindActionCreators({
    fetchBooks: fetchBooks(bookstoreService),
    onAddedToCard: bookAddedToCard
  }, dispatch);
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
