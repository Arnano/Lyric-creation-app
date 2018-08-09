import React, { Component } from 'react';
import { graphql } from 'react-apollo';

class LyricList extends Component {
  onLike(id) {
    console.log(id);
  }

  getLyricList() {
    return (
      this.props.lyrics.map(({ id, content }) => {
        return (
          <li
            key={id}
            className='collection-item'>
              { content }
              <i className='material-icons' onClick={() => this.onLike(id)}>
                thumb_up
              </i>
          </li>
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
