import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const keyYoutube ='AIzaSyDxrt2iMLlttVdmfLzMBa_splFOBfaXRUc';

//YTSearch({key: keyYoutube, term: "surf" }, function(data) {console.log(data)});

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null,
        };
        this.videoSearch('surf');
    }
videoSearch (term) {
    YTSearch({key:keyYoutube, term: term}, (videos) => {
    console.log('videos',videos);
    this.setState({
        videos: videos,
        selectedVideo: videos[0]
    });
});
}

    render (){
        const videoSearch = _.debounce(term => this.videoSearch(term), 400);
        return (<div>
            <SearchBar onSearchVideo = {videoSearch}/>
            <VideoDetail video = {this.state.selectedVideo}/>
            <VideoList
                onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos}/>
        </div>)
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));
