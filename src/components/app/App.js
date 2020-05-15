import React, {Component} from "react";

import ErrorBoundary from "../error-boundary/error-boundary";
import Spinner from "../spiner";
import BookstoreService from "../../services/bookstore-service";
import {
  BookStoreServiceProvider
} from "../bookstore-service-context/bookstore-service-context";

export default class App extends Component{


  state = {
    bookStoreService: new BookstoreService()
  }

  render() {
    const {bookStoreService} = this.state;

    return (
          <ErrorBoundary>
            <BookStoreServiceProvider value={bookStoreService}>
              <Spinner/>
            </BookStoreServiceProvider>
          </ErrorBoundary>
    )
  }
}