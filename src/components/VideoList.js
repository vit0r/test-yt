import React, { Fragment } from 'react'
import VideoItem from './VideoItem'

import Row from 'react-bootstrap/Row'

const VideoList = ({ videos, handleVideoSelect }) => {
    const renderedVideos = videos.map((video) => {
        return <VideoItem
            key={video.id.videoId}
            video={video}
            handleVideoSelect={handleVideoSelect}
        />
    })

    // const testIfVideos = () => {
    //     if(renderedVideos.length === 0) {
    //         return <Col sm="12">Os vídeos serão <strong>AQUI</strong> exibidos após a busca</Col>
    //     } else {
    //         return renderedVideos
    //     }
    // }

    return (
        <Fragment>
            <Row>
                {renderedVideos}
            </Row>
        </Fragment>
    )
}
export default VideoList