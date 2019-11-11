// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like:{
      type:Boolean,
    },
    count:{
      type:Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    yesSrc:'../image/like.png',
    noSrc: '../image/unlike.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleLike(e){
      let {count,like} = this.properties
      like = !like
      like?count++:count--
      this.setData({
        count:count,
        like:like
      })
    } 
  }
})
