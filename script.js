function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 31.402855841425716, lng: 74.21262336842786 },
    zoom: 13,
    mapId: "f3bdef6371e95353",
  });

  new google.maps.Marker({
    position: { lat: 31.402855841425716, lng: 74.21262336842786 },
    map,
    title: "Hello World!",
  });
}

// 31.402855841425716, 74.21262336842786
