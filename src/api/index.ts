import axios from 'axios';

let service = axios.create({
//   baseURL: 'http://mobilecdn.kugou.com',
  baseURL: '',
  timeout: 3000,
});
// 请求之前
service.interceptors.request.use((req) => {
    // 可以自定义header
    // jwt-token认证时候用到
    return req;
});
// 在请求之后
service.interceptors.response.use((res) => {
    const data = res.data;
    
    //   根据后端协商 视情况而定
    if (data === undefined) {
      alert('网络请求失败，请稍后再试！');
    } else {
      return data;
    }
});
export default{
    //搜索音乐
    search(keyword: string, page: number, pagesize: number) {
        return service({
          url: `api1/api/v3/search/song?format=json&keyword=${keyword}&page=${page}&pagesize=${pagesize}&showtype=1`,
          method: 'get'
        });
    },
    //音乐详情
    info(hash: string){
        return service({
            url: `api2/app/i/getSongInfo.php?cmd=playInfo&hash=${hash}`,
            method: 'get'
        })
    }
}
