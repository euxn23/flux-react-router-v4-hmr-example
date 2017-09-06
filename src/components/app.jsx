import React from 'react';
import { BrowserRouter, Link, NavLink, Redirect, Route, Switch, withRouter} from 'react-router-dom';
import { Container } from 'flux/utils';
import BookStore from '../stores/book-store';

import Top from './top';
import BookList from './book-list';
import BookDetail from './book-detail';
import BookCreate from './book-create';
import Menu2 from './menu-2';
import Menu3 from './menu-3';


const Routes = withRouter((props) => (
  <div>
    <nav className="navbar navbar-inverse">
      <div className="container">
        <Link className="navbar-brand" to="/">SampleApp</Link>
        <ul className="nav navbar-nav">
          <li className={props.location.pathname === '/books' ? 'active' : ''}>
            <Link to="/books">Books</Link>
          </li>
          <li className={props.location.pathname === '/menu2' ? 'active' : ''}>
            <Link to="/menu2">Menu2</Link>
          </li>
          <li className={props.location.pathname === '/menu3' ? 'active' : ''}>
            <Link to="/menu3">Menu3</Link>
          </li>
        </ul>
      </div>
    </nav>
    <div className="container">
      <Switch>
        <Route exact path="/" component={Top} />
        <Route
          exact path="/books"
          render={()=> <BookList appState={props.appState} />}
        />
        <Route
          path="/books/detail/:id"
          render={({match}) => <BookDetail appState={props.appState} match={match} />}
        />
        <Route
          path="/books/new"
          render={({history}) => <BookCreate appState={props.appState} history={history}/>}
        />
        <Route exact path="/menu2" component={Menu2} />
        <Route exact path="/menu3" component={Menu3} />
        <Redirect from="*" to="/" />
      </Switch>
    </div>
  </div>
));


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
        <Routes appState={this.state.appState} />
      </BrowserRouter>
    );
  }
}

const App = Container.create(Root);
export default App;
