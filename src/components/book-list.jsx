import React from 'react';
import { Link } from 'react-router-dom';
import BookAction from '../actions/book-action';


export default class BookList extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    BookAction.fetchAll();
  }
  render() {
    const books = this.props.appState.books.map(book => (
        <tr key={book.id}>
          <td>{book.id}</td>
          <td><Link to={`/books/detail/${book.id}`}>{book.name}</Link></td>
          <td>{book.author}</td>
          <td>{book.price}</td>
        </tr>
    ));
    return (
      <div>
        <Link to="/books/new">
          <button className="bnt btn-lg btn-success" style={{ margin: 10 }}>
            CREATE
          </button>
        </Link>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Author</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {books}
          </tbody>
        </table>
      </div>
    );
  }
}