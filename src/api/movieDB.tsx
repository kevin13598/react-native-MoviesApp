import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'd4c3ac2fa8cf13b9a97ea51f60fe4413',
        language: 'es-ES'
    }
});

export default movieDB;