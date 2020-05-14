import React from 'react';
import {Grid} from '@material-ui/core';
// import Iframe from 'react-iframe';
import '../components/css/content.css';
// https://www.googleapis.com/youtube/v3/search?key=AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA&channelId=UCXgGY0wkgOzynnHvSEVmE3A&part=snippet,id&order=date&maxResults=10
// const apiKey = 'AIzaSyAcaEefYZwhsDglSAffWve8wGCqOxIpPhQ';
// const channelID = 'UC3XkkDSSGqaBPimn22vCHDg';
// const result = 30;
// var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`;


 

const Content = ({video,relatedVideos,onVideoSelect}) => {
    // constructor(props){
    //     super(props);
    //     this.search = this.props;
    //     this.finalURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=${this.search}&type=video&videoDefinition=high&maxResults=${result}&key=${apiKey}`;
    //     this.state = {
    //       resultyt: []
    //     };
    //     this.clicked = this.clicked.bind(this);
    //   }
      
    // clicked(){
    //   fetch(this.finalURL)
    //       .then((response) => response.json())
    //       .then((responseJson) => {
    //         // console.log(responseJson);
    //         const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
    //         this.setState({resultyt});
    //       })
    //       .catch((error) => {
    //         console.error(error);
    //       });
    //     }
    if(!video){
      return(
        
      <Grid item xs={6} justify="center" className="contentGridMain">
          Video is Loading...
      </Grid>
      )
    }
      const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
      console.log(video);
        return(
          <React.Fragment>
            
            <Grid item xs={6} justify="center" className="contentGridMain">
                
                {/* <input type="button" id="clickBtn" onClick={this.clicked} onLoad={this.click} value="load"/>
                
                {
                    
                  
                    this.state.resultyt.map((link, i) => {
                    var frame = <Grid item xs={6}  key={i} className="contentGrid youtube"><Iframe width="560" height="315" url={link} /></Grid>
                    return frame;
                    })
                }
                {this.frame} */}
                
                    
                    <iframe frameBorder="0" height="100%" width="100%"  title="video Player" src={videoSrc} />
                    <br/><h1 className="videoTitle">{video.snippet.title}</h1>
                    <br/><p className="videoChannelId"><b>Channel Name:-</b>{video.snippet.channelTitle}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>Channel Id:-</b>{video.snippet.channelId}</p>
                    <br/> <h2 className="videoDescriptionHeading">Channel Description :-</h2> <br/>
                    <p className="videoDescription">
                      {video.snippet.description}
                    </p>
                </Grid>
                <Grid item xs={5} className="gridRelated">
               { 
               
               relatedVideos.map((link, i) => {
                    var frame = <Grid item   key={i} className="relatedvideos"  onClick={()=> onVideoSelect(link)}>
                        <img alt="related videos" src={link.snippet.thumbnails.medium.url}/>
                        <div className="relatedvideoDescription">
                        <b className="relatedVideoHeading">{link.snippet.title}</b>
                        <br/><p className="relatedvideoChannelName">{link.snippet.channelTitle}</p>
                        <br/><p className="relatedVideoDescription" style={{color:"#888"}}>{link.snippet.description}</p>
                        </div> 
                      </Grid>
                    return frame;
                    })
                    }
                </Grid>
          </React.Fragment>
        )
    
}
// window.onload = function(){
//   document.getElementById('clickBtn').click();
// }

export default Content; 