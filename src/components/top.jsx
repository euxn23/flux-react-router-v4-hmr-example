import React from 'react';
import { Link } from 'react-router-dom';


export default class Top extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <p><Link to="/books">Books</Link></p>
        <p><Link to="/menu2">Menu2</Link></p>
        <p><Link to="/menu3">Menu3</Link></p>
      </div>
    );
  }
}