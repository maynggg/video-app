import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './Header';
import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer';
import { getPopularVideos } from '../apiService';
import './App.css';

function App() {
  const [videos, setVideos] = useState([]);
  const [videoCache, setVideoCache] = useState({});

  useEffect(() => {
    const fetchVideos = async () => {
      const _videos = await getPopularVideos();
      setVideos(_videos);
    };

    fetchVideos();
  }, []);

  const handleVideoSearch = (newVideos) => setVideos(newVideos);

  const handleVideoPause = (videoId, currentTime) => {
    setVideoCache({
      ...videoCache,
      [videoId]: currentTime,
    });
  };

  return (
    <div>
      <Router>
        <Header
          onVideoSearch={handleVideoSearch}
        />
        <Switch>
          <Route path="/watch">
            <VideoPlayer
              videoCache={videoCache}
              onVideoPause={handleVideoPause}
            />
          </Route>
          <Route path="/">
            <VideoList
              videos={videos}
            />
          </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
