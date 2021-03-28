import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

const MAX_DESCRIPTION_LENGTH = 150;

function VideoListItem({ video }) {
  const history = useHistory();

  const handleVideoClick = () => {
    history.push(`/watch?v=${video.id.videoId}`);
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
