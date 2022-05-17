import { useEffect, useState } from "react"
import { Popup, useMap } from "react-leaflet"
import Marker from 'react-leaflet-enhanced-marker'

import { openWeatherApi } from "../../services/api"

import { IWeather } from '../../interfaces'
import { PopUpInfo } from "./style"
import { translate } from "../../utils/Translate"

const MarkCities = ({ cityId }: { cityId: number }) => {
  const [cityInformations, setCityInformations] = useState<IWeather | undefined>()

  const map = useMap()

  useEffect(() => {
    (async () => {
      const response = await openWeatherApi.get("", { params: { id: cityId } })
      setCityInformations(response.data)
      map.flyTo([response.data.coord.lat, response.data.coord.lon], 5)
    })()
  }, [cityId, map])

  return (
    <>
      {cityInformations &&
        <Marker position={[cityInformations.coord.lat, cityInformations.coord.lon]}
          icon={<div className="custom-marker">{cityInformations.name}</div>}>
          <Popup>
            <PopUpInfo onClick={() => map.closePopup()}>
              <div className="cityName">{cityInformations.name}</div>
              <div className="content">
                <span><b>{translate.country}:</b> {cityInformations.sys.country}</span>
                <span><b>Temp:</b> {cityInformations.main.temp}ºC</span>
                <span><b>Min:</b> {cityInformations.main.temp_min}ºC</span>
                <span><b>Max:</b> {cityInformations.main.temp_max}ºC</span>
              </div>
            </PopUpInfo>
          </Popup>
        </Marker>
      }
    </>
  )
}

export default MarkCities