export const config = {
  api: {
    endpoint: WEBPACK_API_ENDPOINT || 'http://0.0.0.0:3000'
  }
};
export const keys = {
  book: {
    fetched: Symbol('BOOK_FETCHED'),
    created: Symbol('BOOK_CREATED'),
  },
};
