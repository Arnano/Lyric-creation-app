import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';
import query from '../../queries/fetchSongs.js';
import _ from 'lodash';

class SongList extends Component {
  onDeleteSong(id) {
    const { mutate, data } = this.props;

    mutate({ variables: { id }})
      .then(() => { data.refetch() });
  }

  createSongList() {
    const { songs, loading } = this.props.data;
    return loading
      ? <li className='collection-item'>'...Loading'</li>
      : _.map(songs, ({ id, title }) =>
          <li key={id}
            className='collection-item'>
            <Link to={`songs/${id}`}>
              { title }
            </Link>
            <i
              className='material-icons btn-small'
              onClick={() => this.onDeleteSong(id)}>
                delete_forever
            </i>
          </li>);
  }

  render() {
    return(
      <div>
        <ul className='collection'>
          { this.createSongList() }
        </ul>
        <Link
          to='songs/new'
          className='btn-floating btn-large green right'>
            <i className='material-icons'>add</i>
        </Link>
      </div>
    )
  }
}

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export default graphql(mutation)(
  graphql(query)(SongList)
);
