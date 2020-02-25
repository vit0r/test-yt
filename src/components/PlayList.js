import React from 'react'
import PlayListItem from './PlayListItem'

const PlayList = ({playlist , handleVideoRemove, handleVideoSelectPlay}) => {
    const renderedVideos =  playlist.map((video) => {
        return <PlayListItem 
            key={video.id.videoId} 
            video={video} 
            handleVideoRemove={handleVideoRemove} 
            handleVideoSelectPlay={handleVideoSelectPlay}
        />
    })

    return <div>{renderedVideos}</div>
}
export default PlayList