import axios from 'axios'

export default axios.create({
    baseURL: 'https://googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: 'AIzaSyAgT7fUni1dYQ6arrUgcFIx7sP761w7GjU'
    }
})