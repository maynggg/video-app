import React from 'react';
import { Card } from 'semantic-ui-react';
import VideoListItem from './VideoListItem';

function VideoList({ videos }) {
  return (
    <div className="videos-container">
      <Card.Group>
        {videos.map((video) => (
          <VideoListItem
            key={video.id.videoId}
            video={video}
          />
        ))}
      </Card.Group>
    </div>
  );
}

export default VideoList;
