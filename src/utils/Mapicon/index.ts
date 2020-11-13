import Leaflet from 'leaflet'
import mapMarker from '../../assets/images/maps-flag.svg'

export const MapIcon = Leaflet.icon({

    iconUrl: mapMarker,
  
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [0, -60]
  })