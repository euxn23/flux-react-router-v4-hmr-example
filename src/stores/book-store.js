import { ReduceStore } from 'flux/utils';

import dispatcher from '../dispatcher';
import { keys } from '../constants';


class BookStore extends ReduceStore {
  getInitialState() {
    return [];
  }
  reduce(state, action) {
    switch(action.type) {
      case keys.book.fetched:
        return action.books;
      default:
        return state;
    }
  }
}

export default new BookStore(dispatcher);
