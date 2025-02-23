import { grey } from '@mui/material/colors'

export default function themeOptions(){
    return (  
      {
      palette: {
        primary: {
          main: grey[50]
        },
        secondary: {
          main: grey[900]
        }
      },
      components: {
        MuiSvgIcon: {
          styleOverrides: {
            root: {
              color: '#fff',
            }
          }
        },
        MuiButton: {
          styleOverrides: {
            root: {
              textTransform: 'none',
            }
          }
        }
      }
    }
  )
}