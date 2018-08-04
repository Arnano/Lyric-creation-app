import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import _ from 'lodash';

class SongList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: null
    }
  }

  componentDidMount() {
    const query = gql`
      {
        songs {
          title
        }
      }
    `;
    this.setState({ songs: query });
  }

  render() {
    return(
      { _.map() }
      <div>
        Song lists: { this.state.songs }
      </div>
    )
  }
}

export default SongList;
