import axios from 'axios'
export function request(config) {
  const instance =axios.create({
    baseURL:'http://localhost:8088',
    timeout:5000
  })
  // instance.interceptors.request.use(aaa=>{
  //   console.log(aaa);
  //   return aaa;
  // },err=>{
  //   console.log(err);
  // })
  instance.interceptors.response.use(res=>{
    console.log(res);
    return res.data;
  },error=>{
    console.log(error);
  })
  return instance(config)
}
