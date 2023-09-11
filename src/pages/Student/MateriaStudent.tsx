import Navbar from "../../components/Navbar";
import { Card, Badge, ScrollArea, Divider, Title, Tabs, Group, useMantineTheme, Button, createStyles } from '@mantine/core';

function MateriaStudent() {
  const theme = useMantineTheme();
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
      <Group mx={10} spacing={0}>
        <Button className={classes.tab_lapse_1}>Lapso 1</Button>
        <Button className={classes.tab_lapse_2}>Lapso 2</Button>
        <Button className={classes.tab_lapse_3}>Lapso 3</Button>
      </Group>
      <Card className={classes.containerCard} mx={10}>

      </Card>
    </>
  );
}

export default MateriaStudent;
