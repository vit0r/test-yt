import React from 'react';
import '../style/video.css';

const VideoItem = ({video , handleVideoSelect}) => {
    return (
        <div>
            <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div className='content'>
                <div className='header'>{video.snippet.title}</div>
            </div>
            <button onClick={ () => handleVideoSelect(video)} className=' video-item item'>
                Adicionar
            </button>
        </div>
    )
};
export default VideoItem;