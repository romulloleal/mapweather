import React, { useEffect, useState } from 'react'
import { AxisOptions, Chart as ChartBar } from 'react-charts'

import { ICities } from '../../interfaces'
import { openWeatherApi } from '../../services/api'
import { translate } from '../../utils/Translate';

type ICityInf = {
  city: string,
  temp: number
}

type ICityData = {
  label: string,
  data: ICityInf[]
}

const Chart = ({ cities }: { cities: ICities[] }) => {

  const [cityTemperatures, setCityTemperatures] = useState<ICityData[]>([])

  useEffect(() => {
    Promise.all(cities.map(async (city) => {
      const response = await openWeatherApi.get("", { params: { id: city.geonameid } })
      const informations = {
        label: translate.temperature,
        data: [
          {
            city: `${response.data.name} - ${response.data.sys.country}`,
            temp: response.data.main.temp
          }
        ]
      }
      return informations
    })).then((result) => setCityTemperatures(result))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cities])

  const primaryAxis = React.useMemo(
    (): AxisOptions<ICityInf> => ({
      getValue: x => `${x.city}`,
    }),
    []
  )

  const secondaryAxes = React.useMemo(
    (): AxisOptions<ICityInf>[] => [
      {
        getValue: y => y.temp,
      },
    ],
    []
  )
  return (
    <>
      {cityTemperatures.length >= 1 &&
        <ChartBar
          options={{
            data: cityTemperatures,
            primaryAxis,
            secondaryAxes,
          }}
        />
      }
    </>
  )
}

export default Chart