import Http from '../../utils/http.js'
class ClassicModel extends Http{
  getLatest(callBack){
    let payload = {
      url:'v1/classic/latest',
      method:'GET',
      data:{appkey:'dadaffadada'},
      success:(res)=>{
        callBack(res)
      }
    }
   this.request(payload)
  }
}
export default ClassicModel