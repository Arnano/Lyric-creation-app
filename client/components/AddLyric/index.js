import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class Addlyric extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ''
    }

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(e) {
    const { mutate, songId, data } = this.props;
    const { content } = this.state;

    e.preventDefault();

    mutate({
      variables: { content, songId }
    });
    this.setState({ content: '' });
  }

  render() {
    return(
      <form onSubmit={this.onFormSubmit}>
        <label> Add a lyric </label>
        <input
          value={this.state.content}
          onChange={ e => this.setState({ content: e.target.value }) }
        />
      </form>
    )
  }
}

const mutation = gql`
  mutation AddLyricToSong($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        id
        content
        likes
      }
    }
  }
`;

export default graphql(mutation)(Addlyric);
