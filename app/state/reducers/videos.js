
const videos = (state = {
  isSigningIn: false,
  isSignedIn: false,
  isGetVideosPending: false,
  videosPages: [],
  isGetVideoPending: false,
  video: null
}, action) => {
  switch (action.type) {
    case 'VIDEO_SET_SIGNING_IN':
      return {
        ...state,
        isSigningIn: action.isSigningIn,
        isSignedIn: action.isSignedIn
      }
    case 'VIDEO_SET_SIGNING_IN':
      return {
        ...state,
        isSigningIn: action.isSigningIn,
        isSignedIn: action.isSignedIn
      }
    case 'VIDEO_SET_GET_VIDEOS_PENDING':
      return {
        ...state,
        isGetVideosPending: action.isGetVideosPending
      }
    case 'VIDEO_SET_VIDEOS_PAGE':
      return {
        ...state,
        videosPages: [
          ...state.videosPages,
          action.videosPage
        ],
        isGetVideosPending: action.isGetVideosPending
      }
    case 'VIDEO_SET_GET_VIDEO_PENDING':
      return {
        ...state,
        isGetVideoPending: action.isGetVideoPending
      }
    case 'VIDEO_SET_VIDEO':
      return {
        ...state,
        video: action.video,
        isGetVideoPending: action.isGetVideoPending
      }
    default:
      return state
  }
}

export default videos
