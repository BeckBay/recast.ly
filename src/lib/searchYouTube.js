import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  $.ajax({
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    type: 'GET',
    headers: { 'Authorization': YOUTUBE_API_KEY },
    data: {
      //key: YOUTUBE_API_KEY,
      q: query,
    },
    success: callback || function(data) {
      console.log(data);
    },
    error: errorCB || function(error) {
      console.log(error);
    }
  });
};


export default searchYouTube;
