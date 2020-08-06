import axios from 'axios';

const instance = axios.create({
  // baseURL: 'https://quiz-admin-api.priyoschool.com/admin/api'
  baseURL: 'http://68.183.186.191:8765',
  responseType: 'blob',
});
instance.interceptors.request.use(function (config) {
  console.log('A request is made to Priyo quiz');

  console.log('Injecting authorization header');
  // config.headers.Authorization = 'Token b5ea0dd65c9fff4977bd4ec76a62d00e1ceddf44';
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  if (token) config.headers.Authorization = 'Token ' + token;
  if (role) config.headers.role = role;

  // if (!config.headers.Accept)
  //     config.headers.Accept = "application/vnd.api+json";

  // if(!config.headers['Content-Type'])
  //     config.headers['Content-Type'] = "application/vnd.api+json";

  return config;
});
export default instance;
