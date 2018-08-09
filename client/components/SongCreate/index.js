import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';
import query from '../../queries/fetchSongs.js';

class SongCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({ title: e.target.value });
  }

  onFormSubmit(e) {
    const { mutate } = this.props;
    const { title } = this.state;

    e.preventDefault();

    mutate({
      variables: { title },
      refetchQueries: [{ query }]
    }).then(() => hashHistory.push('/'));
  }

  render() {
    return(
      <div>
      <Link
        to='/'
        className='btn-floating btn-large green left'>
          <i className='material-icons'>keyboard_backspace</i>
      </Link>
        <h3> Create a new song </h3>
        <form onSubmit={this.onFormSubmit}>
          <label>Song title: </label>
          <input
            onChange={this.onInputChange}
            value={this.state.title} />
        </form>
      </div>
    )
  }
}

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);
