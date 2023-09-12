import {
  Button,
  Header, 
  Text,
  TextInput,
} from '@mantine/core';
import { createStyles } from '@mantine/core';
import { useWindowSize } from '@uidotdev/usehooks';

function Navbar() {
  const size = useWindowSize();

  const useStyles = createStyles((theme) => ({
    container: {
      display: 'flex',
      width: '100%',
      height: '100%'
    },
    logoContainer: {
      width: 235,
      height: '100%'
    },
    logo: {
      fontFamily: "acumin-pro, Acumin Pro, Helvetica Neue, Helvetica, Arial, sans-serif",
      fontSize: 25,
      fontWeight: 400,
      fontStyle: "italic",
      color: theme.white,
      marginTop: '15px',
      textShadow: `2px 2px 0 ${theme.colors.blue[8]}`
    },
    searchBoxContainer: {
      marginTop: '15px',
      width: 400,
      height: '100%'
    },
    searchBox: {
      width: '100%',
      marginLeft: '5px',
      borderRadius: '100%',
      '::placeholder': {
        color: theme.white,
      }
    },
    childContainer: {
      width: `${Number(size.width) - 635}px`,
    },
    searchButton: {
      margin: '15px 0 0 15px',
      color: theme.white,
      border: '1.5px solid #fff',
      borderRadius: '6px',
      ":hover": {
        background: 'white',
        color: theme.black,
        transition: '0.8s',
      }
    },
  }))

  const { classes } = useStyles();

  return (
    <>
      <Header 
        height={80} 
        p="xs" 
        withBorder={false} 
        bg="#0E111E"
      >
        <div className={classes.container}>
          <div className={classes.logoContainer}>
            <Text
              className={classes.logo}
            >
              Colegio Bellas Artes
            </Text>
          </div>
          <div className={classes.searchBoxContainer}>
            <TextInput 
              className={classes.searchBox}
              size='md'
              radius={6}
              placeholder='Buscar tu curso...'
            />
          </div>
          <div className={classes.childContainer}>
            <Button
              className={classes.searchButton}
              size='md'
              variant='unstyled'
            >
              Buscar
            </Button>
          </div>
        </div>
      </Header>
    </>
  )
}

export default Navbar
