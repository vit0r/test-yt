import React, { Fragment } from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const VideoDetail = ({video}) => {
    if (!video) {
        return <div></div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`
    return (
        <Fragment>
            <div className="video-player">
                <Row>
                    <Col sm="8">
                        <iframe src={videoSrc} allowFullScreen title='Video player' width="100%" height="450" />
                    </Col>
                    <Col sm="3">
                        <h3>{video.snippet.title}</h3>
                        <p>{video.snippet.description}</p>
                    </Col>
                    <Col sm="1">
                        <span><i className="fa fa-close text-danger"></i></span>
                    </Col>
                </Row>
            </div>
        </Fragment>

    )
}

export default VideoDetail