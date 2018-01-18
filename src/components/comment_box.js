import React, { Component } from 'react';

export default class CommentBox extends Component {
  constructor(props){
    super(props);

    this.state = { comment: '' };
  }

  handleChange(event) {
    this.setState({ comment: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ comment: '' });
  }

  render() {
    return (
      <form onSubmit={(event) => {this.handleSubmit(event)}} className="comment-box">
        <textarea value={this.state.comment} onChange={(event) => { this.handleChange(event); }} />
        <button action="submit"> Submit </button>
      </form>
    );
  }
}