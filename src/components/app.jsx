import React from 'react';
import { BrowserRouter, Match, Link } from 'react-router';
import { Container } from 'flux/utils';
import BookStore from '../stores/book-store';

import Top from './top';
import BookList from './book-list';
import BookDetail from './book-detail';
import BookCreate from './book-create';
import Menu2 from './menu-2';
import Menu3 from './menu-3';


class Root extends React.Component {
  constructor(props) {
    super(props);
  }
  static getStores() {
    return [
      BookStore,
    ];
  }
  static calculateState() {
    return {
      appState: {
        books: BookStore.getState()
      },
    };
  }

  render() {
    return (
      <BrowserRouter>
        {({ router, location }) => (
          <div>
            <nav className="navbar navbar-inverse">
              <div className="container">
                <Link className="navbar-brand" to="/">SampleApp</Link>
                <ul className="nav navbar-nav">
                  <li className={location.pathname === '/books' ? 'active' : ''}>
                    <Link to="/books">Books</Link>
                  </li>
                  <li className={location.pathname === '/menu2' ? 'active' : ''}>
                    <Link to="/menu2">Menu2</Link>
                  </li>
                  <li className={location.pathname === '/menu3' ? 'active' : ''}>
                    <Link to="/menu3">Menu3</Link>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="container">
              <Match exactly pattern="/" component={Top} />
              <Match
                exactly pattern="/books"
                render={()=> <BookList appState={this.state.appState} />}
              />
              <Match
                pattern="/books/detail/:id"
                render={({params}) => <BookDetail appState={this.state.appState} params={params} />}
              />
              <Match
                pattern="/books/new"
                render={({params}) => <BookCreate appState={this.state.appState} params={params} router={router} />}
              />
              <Match exactly pattern="/menu2" component={Menu2} />
              <Match exactly pattern="/menu3" component={Menu3} />
            </div>
          </div>
        )}
      </BrowserRouter>
    );
  }
}

const App = Container.create(Root);
export default App;
