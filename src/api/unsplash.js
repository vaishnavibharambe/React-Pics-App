import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID Cjieel9TvyYUvTp7KCvKGssbhat-VarelG9MXgELEJk'
    }
});