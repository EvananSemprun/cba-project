import { Card ,Title,createStyles,Button} from '@mantine/core';
import Themecontentstudent from '../../components/Themecontentstudent'
function ThemeStudent() {

  const useStyles = createStyles((theme) => ({
    containerCard: {
      borderRadius: '0 5px 5px 5px',
      height: 'calc(100vh - 128px)',
      backgroundColor: theme.colors.gray[0]
    },
    tab_lapse_1: {
      borderRadius: '5px 0 0 0',
      backgroundColor: theme.colors.light,
    },
    tab_lapse_2: {
      borderRadius: '0 0 0 0',
      backgroundColor: theme.colors.light,
    },
    tab_lapse_3: {
      borderRadius: '0 5px 0 0',
      backgroundColor: theme.colors.light,
    },
  }));

  const { classes } = useStyles();

  const titleStyle = {
    fontFamily: 'Montserrat',
    borderRadius: '15px 0 0 15px'
  };

  return (
    <>
      <Card  style={titleStyle}  className={classes.containerCard} w="100%" h="100%">
      <Title  align="center">
        Tema: Nombre del tema
      </Title>
      
      <Themecontentstudent/>
      <Button mt={25} color="indigo" radius="xs">
      Descargar contenido
    </Button>
      </Card>
    </>
  );
}
export default ThemeStudent;
