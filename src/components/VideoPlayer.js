import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import { useLocation } from 'react-router-dom';
import { getVideoDetail } from '../apiService';


function VideoPlayer({ videoCache, onVideoPause }) {
  const location = useLocation();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const fetchVideoDetail = async () => {
      const videoId = location.search.substring(3);
      const _video = await getVideoDetail(videoId);
      setVideo(_video);
    };

    fetchVideoDetail();
  }, []);

  const handleVideoPause = ({ target }) => {
    const currentTime = target.getCurrentTime();
    onVideoPause(video.id.videoId, currentTime);
  };

  const checkVideoCache = ({ target }) => {
    const cacheTime = videoCache[video?.id.videoId];
    if (cacheTime) {
      target.seekTo(cacheTime);
    }
  };

  if (video === null) return null;

  return (
    <div className='youtube-player'>
      <YouTube
        videoId={video.id}
        onPause={handleVideoPause}
        onReady={checkVideoCache}
      />
    </div>
  );
}

export default VideoPlayer;
