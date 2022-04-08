import axios from 'axios';

export default axios.create({
  baseURL: 'http://phantom-api-pirates.herokuapp.com/',
});
