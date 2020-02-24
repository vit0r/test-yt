import React from 'react';
import '../style/video.css';

const PlayListItem = ({ video, handleVideoRemove }) => {
    return (
        <div>
            <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
            <div className='content'>
                <div className='header'>
                    {video.snippet.title} 
                    <button onClick={() => handleVideoRemove(video)} className='video-item item'>X</button>
                </div>
            </div>
        </div>
    )
};
export default PlayListItem;