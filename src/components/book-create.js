import React from 'react';
import BookAction from '../actions/book-action';


export default class BookCreate extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      author: '',
      price: '',
    };
  }
  handleForm(ev) {
    ev.preventDefault();
    BookAction.create(this.state);
    this.props.history.push("/books");
  }
  onNameChange(ev) {
    ev.preventDefault();
    this.setState({name: ev.target.value.trim()});
  }
  onAuthorChange(ev) {
    ev.preventDefault();
    this.setState({author: ev.target.value.trim()});
  }
  onPriceChange(ev) {
    ev.preventDefault();
    this.setState({price: ev.target.value.trim()});
  }

  render() {
    return (
      <div className="jumbotron">
        <h2>New Book</h2>
        <div className="container">
          <div className="form-group">
            <label className="col-md-2">Name</label>
            <div className="col-md-10">
              <input
                type="text" name="name" className="form-control" style={{width: 360}}
                value={this.state.name} onChange={ev => this.onNameChange(ev)}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2">Author</label>
            <div className="col-md-10">
              <input
                type="text" name="name" className="form-control" style={{width: 360}}
                value={this.state.author} onChange={ev => this.onAuthorChange(ev)}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2">Price</label>
            <div className="col-md-10">
              <input
                type="text" name="name" className="form-control" style={{width: 360}}
                value={this.state.price} onChange={ev => this.onPriceChange(ev)}
              />
            </div>
          </div>
          <button type="button" className="btn btn-success" onClick={ev => this.handleForm(ev)} >
            CREATE
          </button>
        </div>
      </div>
    )
  }
}
