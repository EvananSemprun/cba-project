import { Card, Title, Divider, createStyles, Group, Button } from '@mantine/core';
import Homeworkstudentcontent from '../../components/Student/Homeworkstudentcontent'

function Homeworkstudent() {

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
            <Card style={titleStyle} className={classes.containerCard} w="100%" h="100%">

                <Card radius="xl" withBorder  >

                    <Title align="center">
                        Tema: Nombre del tema
                    </Title>

                    <Divider my="sm" variant="dashed" />


                    <Card radius="xl" withBorder  >

                        <Card style={{ backgroundColor: "#F1F3F5" }} radius="xl" withBorder  >
                            <Homeworkstudentcontent />
                        </Card>


                        <Group position="center">

                            <Button size="md" mt={25} color="indigo" radius="xl">
                                Subir tarea
                            </Button>

                            <Button size="md" mt={25} color="indigo" radius="xl">
                                Descargar contenido
                            </Button>

                        </Group>

                    </Card>

                    <Group position="apart">
                       
                    </Group>
                </Card>
            </Card>
        </>
    );
}
export default Homeworkstudent;
