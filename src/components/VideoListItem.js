import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

const MAX_DESCRIPTION_LENGTH = 150;

// Each video in the video list
function VideoListItem({ video }) {
  const history = useHistory();

  const handleVideoClick = () => {
    let videoId;

    // The video ID is returned differently in each API
    if (typeof video.id === 'string') {
      videoId = video.id;
    } else {
      videoId = video.id.videoId;
    }
    // Unique link for each video using video ID
    history.push(`/watch?v=${videoId}`);
  }

  return (
    <Card onClick={handleVideoClick}>
      <Image src={video.snippet.thumbnails.default.url} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{video.snippet.title}</Card.Header>
        <Card.Meta>
          <span>{video.snippet.channelTitle}</span>
        </Card.Meta>
        <Card.Description>
          {video.snippet.description.length > MAX_DESCRIPTION_LENGTH 
            ? `${video.snippet.description.substring(0, 150)}...` : video.snippet.description
          }
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

export default VideoListItem;
