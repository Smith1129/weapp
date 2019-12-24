import config from '../config.js'
const tips = {
  1005:'appkey无效',
  3000:'期刊不存在'
}
class Http{
   request(url,method='post',data={})
   {
     return new Promise((resolve,reject)=>{
       this._request(url,resolve,reject,method,data)
     })
   }
  _request(url,resolve,reject,method='post',data={}){
    // if(!params.method){
    //   params.method = 'GET'
    // }
    wx.request({
      url: `${config.api_base_url}${url}`,
      method:method,
      data:data,
      header:{
        'content-type':'application/json',
        'appkey':config.appkey
      },
      success:(res)=>{
        let code = res.statusCode
        if(String(code).startsWith('2')){
          // params.success && params.success(res)
          resolve(res)
        }else{
          reject()
          this._show_error(res.data.error_code)
          // wx.showToast({
          //   title: '4xx错误',
          //   icon:'none',
          //   duration:3000
          // })
          // console.log(11)
        }
      },
      fail:(err)=>{
        reject()
        console.log('worry')
      }
    })
  }
  _show_error(error_code){
    console.log(11)
    wx.showToast({
      title: tips[error_code] ? tips[error_code] :'抱歉,出现了一个错误',
      icon:'none',
      duration:2000
    })
  }
}
export default Http