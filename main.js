window.onload = function(){
  init()
}

var options = {
  widht: 30,
  height: 15,
  title: "<b>这是介绍</b>",
  enableMessage: true
}

var content = {
  lake: "东湖我已经玩过了，不想玩了，偶尔去骑骑车",
  temple: "黄鹤楼太贵了，没玩过orz，有钱在进去玩"
}

function init(){
  var map = new BMap.Map("map")
  var point_lake = new BMap.Point(114.404, 30.56645)
  var point_temple = new BMap.Point(114.314, 30.55445)
  var marker_lake = new BMap.Marker(point_lake)
  var marker_temple = new BMap.Marker(point_temple) 
  map.enableScrollWheelZoom(true)
  map.centerAndZoom("武汉", 12)
  map.addOverlay(marker_lake)
  map.addOverlay(marker_temple)

  EventHub(marker_lake, content.lake, options)
  EventHub(marker_temple, content.temple, options)
}

function EventHub(marker, content, options) {
  marker.addEventListener("mouseover", function () {
    this.openInfoWindow(new BMap.InfoWindow(content, options))
  })
  marker.addEventListener('mouseout', function () {
    this.closeInfoWindow()
  })
}




