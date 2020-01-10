import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Bearer Token'] = token;
  } else {
    delete axios.defaults.headers.common['Bearer Token'];
  }
};

export default setAuthToken;
