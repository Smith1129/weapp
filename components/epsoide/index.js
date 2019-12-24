// components/epsoide/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index:{
      type:Number,
      observer(newVal,oldVal,changePath){
        let val = newVal < 10 ? '0'+newVal:newVal
        this.setData({
          _index:val
        })
        // observer里不可直接setData里不可setData({index:''}) 会重复触发observer
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    year:0,
    month:'',
    _index:''
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
