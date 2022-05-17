import {
  Autocomplete,
  Box,
  Button,
  createFilterOptions, TextField
} from "@mui/material"
import { useEffect, useState } from "react"
import Chart from "../../components/Chart"

import Map from "../../components/Map"
import ModalComponent from "../../components/Modal"
import { ICities } from "../../interfaces"
import { useAuth } from "../../providers/Auth"
import { api } from "../../services/api"
import { translate } from "../../utils/Translate/"

import { Header, LogoutButton } from "./style"


const Home = () => {

  const [cities, setCities] = useState<ICities[]>([])
  const { signOut } = useAuth()
  const [selectedCities, setSelectedCities] = useState<ICities[]>([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // call the cities json
    (async () => {
      const response = await api.get("")
      setCities(response.data.cities)
    })();
  }, [])

  const filterOptions = createFilterOptions({
    limit: 50,
    ignoreAccents: true,
    ignoreCase: true,
  })

  const handleChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: unknown[]
  ) => {
    setSelectedCities(value as ICities[])
  }

  return (
    <>
      <Header>
        <LogoutButton>
          <Button
            variant="contained"
            onClick={signOut}
          >
            {translate.logout}
          </Button>
        </LogoutButton>

        <Box sx={{ mt: 6 }}>
          <Autocomplete
            multiple
            limitTags={10}
            options={cities}
            loading={true}
            loadingText={`${translate.loading}...`}
            filterOptions={filterOptions}
            getOptionLabel={
              (option: any) => `${option.name} - ${option.subcountry}/${option.country}`
            }
            onChange={handleChange}
            renderInput={(params) => (
              <TextField
                {...params}
                label={translate.selectCities}
                variant="outlined"
              />
            )}
          />
        </Box>

        <Box>
          <Button
            variant="contained"
            sx={{ mt: 1 }}
            onClick={() => setIsOpen(true)}
          >
            {translate.showChart}
          </Button>
        </Box>

      </Header>
      <Map selectedCities={selectedCities} />

      <ModalComponent title={translate.temperatureComparison} isOpen={isOpen} setIsOpen={setIsOpen}>
        <Chart cities={selectedCities} />
      </ModalComponent>
    </>
  )
}

export default Home