import fetch from 'isomorphic-fetch';

import Dispatcher from '../dispatcher';
import { config, keys } from '../constants';


export default class BookAction {
  static fetchAll() {
    return fetch(`${config.api.endpoint}/books`)
      .then(res => res.json()).then(books => {
        Dispatcher.dispatch(
          {
            type: keys.book.fetched,
            books: books,
          }
        );
      });
  }

  static create(book) {
    return fetch(`${config.api.endpoint}/books`,
      {
        method: 'POST',
        body: JSON.stringify(book),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(res => res.json()).then(() => {
      BookAction.fetchAll();
    });
  }
}
