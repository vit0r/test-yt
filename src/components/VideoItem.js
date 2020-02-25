import React, { Fragment } from 'react'
import '../style/video.css'

import Col from 'react-bootstrap/Col'

import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Image from 'react-bootstrap/Image'

const VideoItem = ({ video, handleVideoSelect }) => {
    return (
        <Fragment>
            <Col sm="6">
                <div className="video-item item">
                    <Image className='video-item--image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}></Image>
                    <div className='video-item--description'>
                        {video.snippet.title}
                    </div>
                    <ButtonToolbar className='video-item--actions'>
                        <Button onClick={() => handleVideoSelect(video)} className="video-item--actions-item video-item--actions-plus"><i className="fa fa-plus"></i></Button>
                    </ButtonToolbar>
                </div>
            </Col>
        </Fragment>
    )
}
export default VideoItem