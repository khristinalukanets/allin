import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://allin-app-5756a.firebaseio.com/'
});

export default instance;
