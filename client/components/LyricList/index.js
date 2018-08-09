import React, { Component } from 'react';
import { graphql } from 'react-apollo';

class LyricList extends Component {
  getLyricList() {
    return (
      this.props.lyrics.map(({ id, content }) => {
        return (
          <li key={id} className='collection-item'> { content } </li>
        )}
      )
    );
  }

  render() {
    return(
      <ul className='collection'>
        { this.getLyricList() }
      </ul>
    )
  }
}

export default LyricList;
