import React from 'react';
import SearchBar from './components/Searchbar';
import VideoList from './components/VideoList';
import PlayList from './components/PlayList';
import VideoDetail from './components/VideoDetail';
import axios from 'axios';
import _ from 'lodash';

const axiosRequestYoutube = axios.create({ baseURL: 'https://www.googleapis.com/youtube/v3/' });
const axiosRequestPLayList = axios.create({ baseURL: 'http://localhost:3001/' });

class App extends React.Component {

    state = {
        videos: [],
        playlist: [],
        selectedVideo: null
    };

    componentDidMount() {
        this.handlePlayList();
    };

    handleSubmit = async (termFromSearchBar) => {
        const response = await axiosRequestYoutube.get('/search', {
            params: {
                q: termFromSearchBar,
                part: 'snippet',
                maxResults: 4,
                type: 'video',
                key: 'AIzaSyDJl9d4GxpXCq9Z2uUrV1XoA8hsaPtiJXU'
            }
        });
        this.handleRemoveVideoIfOnPLayList(response.data.items);
    };

    handleRemoveVideoIfOnPLayList = (youtubeVideos) => {
        const videosInPlayList = _.intersectionBy(youtubeVideos, this.state.playlist, 'id.videoId');
        _.forEach(videosInPlayList, (video) => {
            this.handleRemoveVideoFromStateIfAdd(youtubeVideos, video);
        });
        this.setState({
            videos: youtubeVideos
        });
    };

    handleRemoveVideoFromStateIfAdd = (videos, video) => {
        _.remove(videos, (rmvideo) => {
            if (rmvideo.id.videoId === video.id.videoId) {
                return rmvideo;
            }
        });
    };

    handleVideoSelect = async (video) => {
        video.videoIdDb = video.id.videoId;
        const response = await axiosRequestPLayList.post('/playlist', video);
        if (response.status === 201) {
            this.setState({ selectedVideo: video });
            this.handlePlayList();
            this.handleRemoveVideoFromStateIfAdd(this.state.videos, video);
        }
    };

    handleVideoSelectPlay = async (video) => {
        this.setState({ selectedVideo: video });
    };

    handleVideoRemove = async (video) => {
        const response = await axiosRequestPLayList.delete(`/playlist/${video.videoIdDb}`);
        if (response.status === 200) {
            this.handlePlayList()
        }
    };

    handlePlayList = async () => {
        const response = await axiosRequestPLayList.get('/playlist');
        if (response.status === 200) {
            this.setState({
                playlist: response.data
            });
        }
    }

    render() {
        return (
            <div className='ui container' style={{ marginTop: '1em' }}>
                <div className='ui container' style={{ float: "left", width: "25%", marginTop: '1em' }}>
                    <SearchBar handleFormSubmit={this.handleSubmit} />
                    <div className='ui grid'>
                        <div className="ui row">
                            <div className="five wide column">
                                <VideoList
                                    handleVideoSelect={this.handleVideoSelect}
                                    videos={this.state.videos}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='ui container' style={{ float: "left", width: "50%", marginTop: '1em' }}>
                    <div className="eleven wide column">
                        <VideoDetail video={this.state.selectedVideo} />
                    </div>
                </div>
                <div className='ui container' style={{ float: "left", width: "25%", marginTop: '1em' }}>
                    <h1>PlayList</h1>
                    <div className='ui grid'>
                        <div className="ui row">
                            <div className="five wide column">
                                <PlayList
                                    handleVideoRemove={this.handleVideoRemove}
                                    handleVideoSelectPlay={this.handleVideoSelectPlay}
                                    playlist={this.state.playlist}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;