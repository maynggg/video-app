import axios from 'axios';

export const searchVideo = async (keyword) => {
  const { data } = await axios.get('https://www.googleapis.com/youtube/v3/search', {
    params: {
      q: keyword,
      part: 'snippet',
      key: process.env.REACT_APP_API_KEY,
    }
  });
  return data.items;
}

export const getVideoDetail = async (videoId) => {
  const { data } = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
    params: {
      id: videoId,
      part: 'snippet',
      key: process.env.REACT_APP_API_KEY,
    }
  });
  return data.items[0];
}

export const getPopularVideos = async () => {
  const { data } = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
    params: {
      part: 'snippet',
      chart: 'mostPopular',
      regionCode: 'AU',
      key: process.env.REACT_APP_API_KEY,
    }
  });
  return data.items;
}