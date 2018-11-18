window.onload = function(){
  init()
}

function init(){
  var map = new BMap.Map("map")
  var point1 = new BMap.Point(114.404, 30.56645)
  var point2 = new BMap.Point(114.314, 30.54445)
  map.enableScrollWheelZoom(true)
  map.centerAndZoom("武汉", 12)
  var marker1 = new BMap.Marker(point1)  
  var marker2 = new BMap.Marker(point2)   
  map.addOverlay(marker1)
  map.addOverlay(marker2)
  var content1 = "<div>东湖我已经玩过了，不想玩了，偶尔去骑骑车</div>"
  var content2 = "<div>黄鹤楼太贵了，没玩过orz，有钱在进去玩</div>"
  var options = {
    widht: 30,
    height: 15,
    title: "<b>这是测试</b>",
    enableMessage: true
  }

  // addListener('mouseover', )

  marker1.addEventListener("mouseover", function () {
    this.openInfoWindow(new BMap.InfoWindow(content1, options))
  });
  marker1.addEventListener('mouseout', function(){
    this.closeInfoWindow()
  })
  marker2.addEventListener("mouseover", function () {
    this.openInfoWindow(new BMap.InfoWindow(content2, options))
  });
  marker2.addEventListener('mouseout', function () {
    this.closeInfoWindow()
  })
}


// function addListener(action, func, marker){
//   marker.addEventListener(action, func)
// }


