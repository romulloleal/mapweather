import { Box, Button, Modal } from '@mui/material';
import { translate } from '../../utils/Translate';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "90%",
  height: "90vh",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const ModalComponent = ({ children, title, isOpen, setIsOpen }:
  { children: React.ReactNode, title: string, isOpen: boolean, setIsOpen: (isOpen: boolean) => void }) => {
  return (

    <Modal
      open={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <Box sx={{ ...style }}>

        <h3>{title}</h3>

        <Box sx={{width: "100%", height: "95%"}}>
          {children}
        </Box>

        <Button
          onClick={() => setIsOpen(false)}
          variant="contained"
          sx={{ position: 'absolute', top: 5, right: 5 }}
        >
          {translate.close}
        </Button>
      </Box>
    </Modal>
  )
}

export default ModalComponent