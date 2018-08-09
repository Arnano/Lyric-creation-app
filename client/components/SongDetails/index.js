import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import fetchSong from '../../queries/fetchSong.js';
import LyricList from '../LyricList';

import AddLyric from '../AddLyric';

class SongDetails extends Component {
  render() {
    const { song, loading } = this.props.data;
    if(!song) return <h3> '...Loading'</h3>

    return (
      <div>
        <Link
          to='/'
          className='btn-floating btn-large green left'>
            <i className='material-icons'>keyboard_backspace</i>
        </Link>
        <h3> { song.title } </h3>
        <LyricList lyrics={song.lyrics}/>
        <AddLyric songId={this.props.params.id} />
      </div>
    )
  }
}

export default graphql(fetchSong, {
  options: (props) => { return { variables: { id: props.params.id } } }
})(SongDetails);
