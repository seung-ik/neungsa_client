/*global kakao*/
import React, { useEffect } from "react";
import axios from "axios";

const MapContents = () => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      let locPosition = new kakao.maps.LatLng(lat, lon);
      console.log(locPosition);
      kakao.maps.load(() => {
        let container = document.getElementById("map");
        let options = {
          center: new kakao.maps.LatLng(lat, lon),
          level: 7,
        };

        const map = new window.kakao.maps.Map(container, options);

        let markerPosition = new kakao.maps.LatLng(lat, lon);

        // 마커를 생성
        let marker = new kakao.maps.Marker({
          position: markerPosition,
        });

        // 마커를 지도 위에 표시
        marker.setMap(map);

        console.log(lat, lon);

        axios
          .get(
            `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${lon}&y=${lat}`,
            {
              headers: {
                Authorization: "KakaoAK ede32a5902568ca38d7da12deead44af",
              },
            }
          )
          .then((address) => {
            console.log("ok");
            console.log(address);
          });
      });
    });
  }, []);
  return (
    <div id="map" style={{ width: "800px", height: "300px" }}>
      지도
    </div>
  );
};

export default MapContents;
