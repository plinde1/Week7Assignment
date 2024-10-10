let map, heatmap;

var objs = [  

]

var wh = [

]
async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");
    
    const myLatlng = { lat: 41.3114, lng: -105.5911  };


    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: myLatlng,
      mapId: "ded0469314e2c640",
    });

  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(),
    map: map,
  });
  var heatmap2 =  new google.maps.visualization.HeatmapLayer({
    data: getPoints2(),
    map: map,
    gradient: ["rgba(0, 255, 255, 0)",
    "rgba(0, 255, 255, 1)",
    "rgba(0, 191, 255, 1)",
    "rgba(0, 127, 255, 1)",
    "rgba(0, 63, 255, 1)",
    "rgba(0, 0, 255, 1)",
    "rgba(0, 0, 223, 1)",
    "rgba(0, 0, 191, 1)",
    "rgba(0, 0, 159, 1)",
    "rgba(0, 0, 127, 1)",
    "rgba(63, 0, 91, 1)",
    "rgba(127, 0, 63, 1)",
    "rgba(191, 0, 31, 1)",
    "rgba(255, 0, 0, 1)",]
  });
  document.getElementById("toggle-heatmap").addEventListener("click", toggleHeatmap);
  document.getElementById("toggle-heatmap2").addEventListener("click", toggleHeatmap2);

function toggleHeatmap() {
  heatmap.setMap(heatmap.getMap() ? null : map);
}
function toggleHeatmap2() {
  heatmap2.setMap(heatmap2.getMap() ? null : map);
}
function getPoints() {
    var points = []
    for(var i=0; i<objs.length; i++){
        points.push(new google.maps.LatLng(objs[i].lat, objs[i].lon))
    }
  return points
}
function getPoints2() {
    var points = []
    for(var i=0; i<wh.length; i++){
        points.push(new google.maps.LatLng(wh[i].lat, wh[i].lon))
    }
  return points
}

}