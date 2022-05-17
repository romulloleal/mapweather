import Routes from './routes';
import Providers from './providers';
import { Grid, MenuItem, Select } from '@mui/material';
import { currentLanguage, setLanguage, translate } from './utils/Translate';

const App = () => {
  return (
    <Providers>
      <Grid className='language-select'>
        <Select size='small' value={currentLanguage} onChange={(e) => setLanguage(e.target.value)}>
        <MenuItem value={"en-US"}>{translate.languageDescriptionEnUs}</MenuItem>
          <MenuItem value={"pt-BR"}>{translate.languageDescriptionPtBr}</MenuItem>
        </Select>
      </Grid>
      <Routes />
    </Providers>
  )
}

export default App