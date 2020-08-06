import axios from 'axios';

const instance = axios.create({
  // baseURL: 'https://quiz-admin-api.priyoschool.com/admin/api'
  baseURL: 'http://68.183.186.191:8765/api',
});
instance.interceptors.request.use(function (config) {
  console.log('A request is made to Priyo quiz');

  console.log('Injecting authorization header');
  config.headers.Authorization =
    'Token eeef41a61d79566d4e35448a22d07d02b71771e5';
  config.headers.role = 'teacher';
  // const token = localStorage.getItem('token');
  // const role = localStorage.getItem('role');
  // if (token) config.headers.Authorization = 'Token ' + token;
  // if (role) config.headers.role = role;

  // if (!config.headers.Accept)
  //     config.headers.Accept = "application/vnd.api+json";

  // if(!config.headers['Content-Type'])
  //     config.headers['Content-Type'] = "application/vnd.api+json";

  return config;
});
export default instance;
