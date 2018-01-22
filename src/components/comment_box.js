import React, { Component } from 'react';
import { connect } from 'react-redux';
import {saveComment} from '../actions/index';

class CommentBox extends Component {
  constructor(props){
    super(props);

    this.state = { comment: '' };
  }

  handleChange(event) {
    this.setState({ comment: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.saveComment(this.state.comment);
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

export default connect(null, { saveComment })(CommentBox);
