import Http from '../../utils/http-p.js'
class bookModel extends Http{
  getHotList(){
    return this.request('classic/hot_list')
  }
}