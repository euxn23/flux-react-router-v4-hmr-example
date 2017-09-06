import React from 'react';


export default class BookDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const book = this.props.appState.books.find(b => b.id === +this.props.match.id) || {};
    return (
      <div className="jumbotron">
        <h1>{book.name}</h1>
        <p>author: {book.author}</p>
        <p>price: {book.price} JPY</p>
      </div>
    );
  }
}