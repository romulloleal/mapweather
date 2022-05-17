import { LatLngExpression } from "leaflet"
import { useEffect, useState } from "react"
import { MapContainer, TileLayer } from "react-leaflet"
import { ICities } from "../../interfaces"

import Marker from './Marker'
import { MapStyle } from "./style"

const Map = ({ selectedCities }: { selectedCities: ICities[] | undefined }) => {
  const [latLng, setLatLng] = useState<LatLngExpression>()

  useEffect(() => {
    // cheks user current position and sets for map (if user location is blocked, set defaul for brazil)
    navigator.geolocation.getCurrentPosition((position) => {
      setLatLng([position.coords.latitude, position.coords.longitude])
    }, (error) => {
      setLatLng([-10, -55])
    })
  }, [])

  return (
    <MapStyle>
      {latLng &&
        <MapContainer center={latLng} zoom={4} minZoom={2} maxBounds={[[-180, -1500], [180, 1500]]}>
          <TileLayer
            attribution='&copy; <a target="_blank" href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>
          | <a target="_blank" href="https://openweathermap.org">OpenWeather</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {selectedCities ? selectedCities.map((city) =>
            <Marker cityId={city.geonameid} key={city.geonameid} />
          ) : ""}
        </MapContainer>
      }
    </MapStyle>
  )
}



export default Map