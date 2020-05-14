import React from 'react';
import {Grid} from '@material-ui/core';
import {Header,Content} from './pages';
// import youtube from './components/api/youtube';
import axios from 'axios';
import './components/css/app.css';

class App extends React.Component {
    state = {
        video : [] ,
        selectedVideo : null ,
    }
    onVideoSelect = (video)=> {
        this.setState({selectedVideo: video});
    }
    componentDidMount() {
        this.handleSubmit('website using html only');
    }
    handleSubmit = async(searchterm) =>{
        const response = await axios.get("https://www.googleapis.com/youtube/v3/search",{
            params:{
                key: '[your_youtube_API_Key_Here]',
                part: 'snippet',
                maxResults: 20,
                q: searchterm
            }
        });
        this.setState({video: response.data.items , selectedVideo : response.data.items[0]});
    }
    render() {
        const {selectedVideo} = this.state;
        return ( 
            <div className="mainDiv">
                <Grid container spacing={3}>    
                     <Header onFormSubmit={this.handleSubmit}/>
                     <Content video={selectedVideo} relatedVideos={this.state.video} onVideoSelect={this.onVideoSelect}/>
                </Grid>
            </div>
        )
    }
}

    

export default App;
