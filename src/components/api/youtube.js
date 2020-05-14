import axios from 'axios';

export default axios.create({
    baseUrl : 'https://www.googleapis.com/youtube/v3'
})