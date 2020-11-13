import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { MapIcon } from '../../utils/Mapicon'
import 'leaflet/dist/leaflet.css'


const Map:React.FC = () => {
  return (
    <MapContainer 
      center={[-22.9006089,-47.0506411]} 
      zoom={14} 
      scrollWheelZoom={false} 
      style={{height: 400, width: "100%", borderRadius:8, zIndex:0}}
    >
      <TileLayer
        attribution='&copy; <a href="http://mapbox.com/">OpenMap</a> contributors'
        url="https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoiam9obm55Y2FycmVpcm8iLCJhIjoiY2tnNnY0MXZ0MDE3bjJ3anhmem1qM29pZCJ9.UMfcUNmuzMV3iRZebrtSqA"
      />
      <Marker 
        icon={MapIcon}
        position={[-22.9006089,-47.0506411]}
      >
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map

{/*import { FiArrowRight } from 'react-icons/fi'; 
  <Map
    center={[-23.1954134,-45.9112845]}
    zoom={13}
    style={{width: '100%', height:'100%'}}
>
  <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoiam9obm55Y2FycmVpcm8iLCJhIjoiY2tnNnY0MXZ0MDE3bjJ3anhmem1qM29pZCJ9.UMfcUNmuzMV3iRZebrtSqA`} />
  <Marker            
    position={[-23.1954134,-45.9112845]}
  >
    <Popup closeButton={false} minWidth={240} maxHeight={240} className="map-popup" >
      {'Campinas'}
      <a href="#">
        <FiArrowRight size={20} color="#fff" />
      </a>
    </Popup>
  </Marker>
</Map> */}