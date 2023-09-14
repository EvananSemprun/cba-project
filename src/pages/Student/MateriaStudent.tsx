import Navbar from "../../components/Navbar";
import { Card, Group, Title, Button, createStyles } from '@mantine/core';
import Activitylist from '../../components/Student/ActivityStudentlist'

function MateriaStudent() {

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

  return (
    <>
      <Navbar />
      
      <Title  color="white" align="center" mb={-35} order={3}>
       Nombre de la materia
      </Title>

      <Group mx={10} spacing={0}>
        <Button className={classes.tab_lapse_1}>Lapso 1</Button>
        <Button className={classes.tab_lapse_2}>Lapso 2</Button>
        <Button className={classes.tab_lapse_3}>Lapso 3</Button>
      </Group>
      
      <Card className={classes.containerCard} w="100%" h="96%" style={{ borderRadius: '15px 0 0 15px' }}>

        <Activitylist color="#FF6961" note="15/20 pts" state="Entragado" title="Examen" /> 
        <Activitylist color="#84B6F4" note="15/20 pts" state="Entragado" title="Tarea" /> 
        <Activitylist color="#A8CA7E"  note="15/20 pts" state="No revisado" title="Tema" /> 
      
      </Card>

    </>
  );
}

export default MateriaStudent;
