import React from "react";
import ReactDom from 'react-dom'
import App from "./components/app";
import {BrowserRouter as Router} from "react-router-dom";
import store from "./store";
import {BookstoreServiceProvider} from "./components/bookstore-service-context";
import {Provider} from "react-redux"
import ErrorBoundary from "./components/error-boundry";
import BookstoreService from "./services/bookstore-service";

const bookstoreService = new BookstoreService();

ReactDom.render(
    <Provider store={store}>
      <ErrorBoundary>
        <BookstoreServiceProvider value={bookstoreService}>
          <Router>
            <App/>
          </Router>
        </BookstoreServiceProvider>
      </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);