import React from "react";
import ReactDom from 'react-dom'
import App from "./components/app/App";
import {BrowserRouter as Router} from "react-router-dom";
import store from "./store";
import {BookStoreServiceProvider} from "./components/bookstore-service-context";
import {Provider} from "react-redux"
import ErrorBoundary from "./components/error-boundary/error-boundary";
import BookstoreService from "./services/bookstore-service";

const bookstoreService = new BookstoreService();

ReactDom.render(
    <Provider store={store}>
      <ErrorBoundary>
        <BookStoreServiceProvider value={bookstoreService}>
          <Router>
            <App/>
          </Router>
        </BookStoreServiceProvider>
      </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);