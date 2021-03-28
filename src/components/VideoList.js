import React from 'react';
import { Card } from 'semantic-ui-react';
import VideoListItem from './VideoListItem';

// A list of search results or popular videos
function VideoList({ videos }) {
  return (
    <div className="videos-container">
      <Card.Group>
        {videos.map((video) => (
          <VideoListItem
            key={video.id}
            video={video}
          />
        ))}
      </Card.Group>
    </div>
  );
}

export default VideoList;
