import React from 'react';
import '../style/video.css';

const PlayListItem = ({ video, handleVideoRemove, handleVideoSelectPlay }) => {
    return (
        <div>
            <div onClick={() => handleVideoSelectPlay(video)} className=' video-item item'>
                <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
                <div className='content'>
                    <div className='header'>
                        {video.snippet.title}
                    </div>
                </div>
            </div>
            <div>
                <button onClick={() => handleVideoRemove(video)} className='video-item item'>X</button>
            </div>
        </div>
    )
};
export default PlayListItem;