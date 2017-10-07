import youtube from '../../utils/youtube'

// Sign In
const setSigningIn = (isSigningIn) => ({
  type: 'VIDEO_SET_SIGNING_IN',
  isSigningIn,
  isSignedIn: false
})

const setSignedIn = (isSignedIn) => ({
  type: 'VIDEO_SET_SIGNING_IN',
  isSigningIn: false,
  isSignedIn
})

export const signIn = () => {
  return dispatch => {
    dispatch(setSigningIn(true))
    return youtube.load()
      .then(() => youtube.signIn())
      .then(() => dispatch(setSignedIn(true)))
  }
}

// Get Videos
const setGetVideosPending = (isGetVideosPending) => ({
  type: 'VIDEO_SET_GET_VIDEOS_PENDING',
  isGetVideosPending
})

const setVideosPage = (videosPage) => ({
  type: 'VIDEO_SET_VIDEOS_PAGE',
  videosPage,
  isGetVideosPending: false
})

export const getVideos = (query) => {
  return dispatch => {
    dispatch(setGetVideosPending(true))
    return youtube.getVideos(query)
      .then((result) => dispatch(setVideosPage(result)))
  }
}

// Get Video
const setGetVideoPending = (isGetVideoPending) => ({
  type: 'VIDEO_SET_GET_VIDEO_PENDING',
  isGetVideoPending
})

const setVideo = (video) => ({
  type: 'VIDEO_SET_VIDEO',
  video,
  isGetVideoPending: false
})

export const getVideo = (videoId) => {
  return dispatch => {
    dispatch(setGetVideoPending(true))
    return youtube.getVideo(videoId)
      .then((result) => dispatch(setVideo(result)))
  }
}
