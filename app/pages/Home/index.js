import './styles.scss'

import React, { Component } from 'react'
import { connect } from 'react-redux'

import Authorize from '../../components/Authorize'
import VideoTile from '../../components/VideoTile'
import Pager from '../../components/Pager'
import { getVideos } from '../../state/actions/videos';

@connect(
  state => ({
    isSignedIn: state.videos.isSignedIn,
    isGetVideosPending: state.videos.isGetVideosPending,
    videosPages: state.videos.videosPages
  }),
  dispatch => ({
    getVideos: (query) => {
      dispatch(getVideos(query))
    }
  })
)
export default class Homepage extends Component {

  componentDidUpdate(prevProps, prevState) {

    const { isSignedIn, isGetVideosPending, videosPages } = this.props;

    if (isSignedIn && !isGetVideosPending && videosPages.length === 0) {
      this.props.getVideos('Discovery');
    }
  }

  render () {

    const { isSignedIn, isGetVideosPending, videosPages } = this.props

    return (
      <div id='homepage'>
        <Authorize />
        {isSignedIn &&
          <div>
          <div id="hero">
            Hero
          </div>
          <div id="videos-list">
            {isGetVideosPending || !videosPages ?
              <h1>Loading...</h1>
            :
              videosPages.map((videosPage) => (
                <div key={videosPage.result.nextPageToken}>
                  {videosPage.result.items.map((video) => (
                    <VideoTile key={video.id.videoId} data={video} />
                  ))}
                </div>
              ))
            }
          </div>
          <div>
            <Pager handler={(callback) => {
              console.log('Yaay');
              callback();
            }} />
          </div>
          </div>
        }
      </div>
    )
  }
}
