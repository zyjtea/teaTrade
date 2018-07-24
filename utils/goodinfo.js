module.exports = {
  goodinfo: goodinfo
}

function goodinfo() {
  var arr = [{
      id: 0,
      goodname: '武夷山岩茶大红袍',
      price: 280,
      advantage: '条索优美',
      size: '500g',
      lv: 'A',
      //商品简介图
      image: 'http://www.tea26.com/file/upload/201701/03/200740111.jpg',
      //商品详情轮播图
      imgurls: [
        "http://www.tea26.com/file/upload/201701/03/200740111.jpg",
        "http://www.tea26.com/file/upload/201701/03/200739471.jpg"

      ]
    },
    {
      id: 1,
      goodname: '铁观音',
      price: 220,
      advantage: '清澈鲜艳',
      size: '500g',
      lv: 'A',
      image: 'http://www.tea26.com/file/upload/201701/03/150449952728.jpg.thumb.jpg',
      imgurls: [
        "http://www.tea26.com/file/upload/201701/03/150731301.jpg",
        "http://www.tea26.com/file/upload/201701/03/164502892728.jpg.thumb.jpg"

      ]
    }
  ]
  return arr
}