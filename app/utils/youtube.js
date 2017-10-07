

// Client ID and API key from the Developer Console
const CLIENT_ID = '367003366701-mb4fmstjviq7293bq0ms9gpv722ol9ec.apps.googleusercontent.com';

// Array of API discovery doc URLs for APIs used by the quickstart
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"];

// Authorization scopes required by the API. If using multiple scopes,
// separated them with spaces.
const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';

/**
 *  On load, called to load the auth2 library and API client library.
 */
function load() {
  return new Promise((resolve) => {
    gapi.load('client:auth2', () => {
      gapi.client.init({
        discoveryDocs: DISCOVERY_DOCS,
        clientId: CLIENT_ID,
        scope: SCOPES
      }).then(resolve);
    });

  });
}

/**
 *  Sign in the user upon button click.
 */
function signIn() {
  return window.gapi.auth2.getAuthInstance().signIn();
}

/**
 *  Sign out the user upon button click.
 */
function signOut() {
  return window.gapi.auth2.getAuthInstance().signOut();
}

function getVideos(query, pageToken) {
  return window.gapi.client.youtube.search.list({
    part: 'snippet',
    type: 'video',
    maxResults: 10,
    q: query,
    pageToken
  });
}

function getVideo(videoId) {
  return window.gapi.client.youtube.videos.list({
    part: 'snippet,contentDetails',
    id: videoId
  });
}

export default {
  load,
  signIn,
  signOut,
  getVideos,
  getVideo
}
