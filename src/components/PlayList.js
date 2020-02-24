import React from 'react';
import PlayListItem from './PlayListItem';

const PlayList = ({playlist , handleVideoRemove}) => {
    const renderedVideos =  playlist.map((video) => {
        return <PlayListItem key={video.id.videoId} video={video} handleVideoRemove={handleVideoRemove} />
    });

    return <div className='ui relaxed divided list'>{renderedVideos}</div>;
};
export default PlayList;