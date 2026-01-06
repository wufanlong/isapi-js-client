import axios from 'axios';

const instance = axios.create({});

instance.interceptors.request.use((config) => {
  console.log('[Axios Request]')
  console.log('URL:', config.baseURL ? config.baseURL + config.url : config.url)
  console.log('Method:', config.method)
  console.log('Headers:', config.headers)
  console.log('Params:', config.params)
  console.log('Data:', config.data)
  return config
});

instance.interceptors.response.use(
  (res) => {
    console.log('[Axios Response]')
    console.log('Status:', res.status)
    console.log('Headers:', res.headers)
    console.log('Data:', res.data)
    return res
  },
  (err) => {
    return Promise.reject(err);
  },
);

export default instance;
