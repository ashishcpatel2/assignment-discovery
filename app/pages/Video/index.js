import './styles.scss'

import React, { Component } from 'react'
import { connect } from 'react-redux';

import { getVideo } from '../../state/actions/videos';

@connect(
  state => ({
    isGetVideoPending: state.videos.isGetVideoPending,
    video: state.videos.video
  }),
  dispatch => ({
    getVideo: (id) => {
      dispatch(getVideo(id))
    }
  })
)
export default class Videopage extends Component {

  componentDidMount(prevProps, prevState) {

    const { isGetVideoPending, video } = this.props;
    const videoId = this.props.match.params.id;
    console

    if (!isGetVideoPending && (!video || video.id !== videoId)) {
      this.props.getVideo(videoId);
    }
  }

  render () {
    if (!this.props.video) return null;

    const video = this.props.video.result.items[0];

    return (
      <div id="videopage">
        <h1>{video.snippet.title}</h1>
        <p>{video.snippet.description}</p>
      </div>
    )
  }
}
